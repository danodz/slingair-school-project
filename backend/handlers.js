"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

//mongo setup
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const callDb = async (fn)=>{
    try{
        // creates a new client
        const client = new MongoClient(MONGO_URI, options);
        await client.connect();

        // connect to the database (db name is provided as an argument to the function)
        const db = client.db("SlingAir");

        const result = await fn(db,client);
        // close the connection to the database server
        client.close();
        return result;
    } catch(err){
        console.log(err.stack);
        return null;
    }
}

const setSeatAvailability = async (db, flightId, seatId, isAvailable)=>{
    await db.collection("flights").updateOne({
        //query
            _id:flightId,
            "seats.id":seatId
        },
        //update
        { $set: {
            "seats.$.isAvailable":isAvailable
        }}
    );
}

const respond = (res,status,data,msg)=>{
    res.status(status).json( { status: status, data: data, message: msg?msg:{} })
}

//### HANDLERS ###

// returns an array of all flight numbers
const getFlights = async (req, res) => {
    const flights = await callDb(async (db)=>{
        return await db.collection("flights").find().toArray();
    });
    if(flights)
        respond(res,200, flights)
    else
        respond(res,404, {}, "No flights found")
};

// returns all the seats on a specified flight
const getFlight = async (req, res) => {
    const _id = req.params.flight;
    const flight = await callDb(async (db)=>{
        return await db.collection("flights").findOne({_id});
    });
    if(flight)
        respond(res,200, flight)
    else
        respond(res,404, {_id}, "Flight not found")
};

// returns all reservations
const getReservations = async (req, res) => {
    const reservations = await callDb(async (db)=>{
        return await db.collection("reservations").find().toArray();
    });
    if(reservations)
        respond(res,200, reservations)
    else
        respond(res,404, {}, "No reservations found")
};

// returns a single reservation
const getSingleReservation = async (req, res) => {
    const _id = req.params.reservation;
    const reservation = await callDb(async (db)=>{
        return await db.collection("reservations").findOne({_id});
    });
    if(reservation)
        respond(res,200, reservation)
    else
        respond(res,404, {_id}, "Reservation not found")
};

// creates a new reservation
const addReservation = async (req, res) => {
    const reservation = req.body;
    reservation._id = uuidv4();

    const result = await callDb(async (db)=>{
        const flight = await db.collection("flights").findOne({_id:reservation.flight});
        const seat = flight.seats.find((seat)=>seat.id===reservation.seat)
        if(!seat.isAvailable)
            return null

        await setSeatAvailability(db, reservation.flight,reservation.seat, false);
        return await db.collection("reservations").insertOne(reservation);
    });
    if(result)
        respond(res, 200, {_id: reservation._id}, "Reservation added with success")
    else
        respond(res, 404, {_id: reservation._id}, "Failed to add reservation")
};

// updates a specified reservation
const updateReservation = async (req, res) => {
    const newReservation = req.body.newReservation;
    const _id = newReservation._id;

    const result = await callDb(async (db)=>{
        const flight = await db.collection("flights").findOne({_id:newReservation.flight});
        const seat = flight.seats.find((seat)=>seat.id===newReservation.seat)
        if(!seat.isAvailable)
            return null

        const oldReservation = await db.collection("reservations").findOne({_id});
        await setSeatAvailability(db, oldReservation.flight, oldReservation.seat, true)
        await setSeatAvailability(db, newReservation.flight, newReservation.seat, false)
        return await db.collection("reservations").updateOne(
            {
                _id,
            },
            {
                $set: newReservation
            }
        );
    })
    if(result)
        respond(res, 200, {_id}, "Reservation updated")
    else
        respond(res, 404, {_id}, "Failed to update reservation")
};

// deletes a specified reservation
const deleteReservation = async (req, res) => {
    const _id = req.params.reservation;
    const result = await callDb(async (db)=>{
        const oldReservation = await db.collection("reservations").findOne({_id});
        await setSeatAvailability(db, oldReservation.flight, oldReservation.seat, true)
        return await db.collection("reservations").deleteOne({_id:oldReservation._id})
    })
    if(result)
        respond(res, 200, {_id}, "Reservation deleted")
    else
        respond(res, 404, {_id}, "Failed to delete reservation")
};

module.exports = {
    getFlights,
    getFlight,
    getReservations,
    addReservation,
    getSingleReservation,
    deleteReservation,
    updateReservation,
};
