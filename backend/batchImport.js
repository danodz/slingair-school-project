const data = require("./data")
const flights = Object.keys(data.flights).map((_id)=>{
    return {_id, seats: data.flights[_id]}
})

const reservations = data.reservations.map((reservation)=>{
    reservation._id = reservation.id;
    delete reservation.id;
    return reservation;
})

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const batchImport = async () => {
    // creates a new client
    const client = new MongoClient(MONGO_URI, options);

    try{
        await client.connect();

        // connect to the database (db name is provided as an argument to the function)
        const db = client.db("SlingAir");
        console.log("connected!");
        // connect to the client

        await db.collection("flights").insertMany(flights);
        await db.collection("reservations").insertMany(reservations);

        // close the connection to the database server
        client.close();
        console.log("disconnected!");
    } catch(err){
        console.log(err.stack);
    }
};

batchImport();