"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

// returns an array of all flight numbers
const getFlights = (req, res) => {};

// returns all the seats on a specified flight
const getFlight = (req, res) => {};

// returns all reservations
const getReservations = (req, res) => {};

// returns a single reservation
const getSingleReservation = (req, res) => {};

// creates a new reservation
const addReservation = (req, res) => {};

// updates a specified reservation
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
