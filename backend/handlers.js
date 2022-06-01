"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

// use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

// returns a list of all flights
const getFlights = (req, res) => {};

// returns all the seats on a specified flight
const getFlight = (req, res) => {};

// returns all reservations
const getReservations = (req, res) => {};

// returns a single reservation
const getSingleReservation = (req, res) => {};

// creates a new reservation
const addReservation = (req, res) => {};

// updates an existing reservation
const updateReservation = (req, res) => {};

// deletes a specified reservation
const deleteReservation = (req, res) => {};

module.exports = {
    getFlights,
    getFlight,
    getReservations,
    addReservation,
    getSingleReservation,
    deleteReservation,
    updateReservation,
};
