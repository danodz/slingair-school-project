"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

// use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

const getFlights = (req, res) => {};

const getFlight = (req, res) => {};

const addReservation = (req, res) => {};

const getReservations = (req, res) => {};

const getSingleReservation = (req, res) => {};

const deleteReservation = (req, res) => {};

const updateReservation = (req, res) => {};

module.exports = {
    getFlights,
    getFlight,
    getReservations,
    addReservation,
    getSingleReservation,
    deleteReservation,
    updateReservation,
};
