// import du framework
const express = require('express');

const ReservationModel = require('../models/reservation.model');

// récupération du Router Express
const Router = express.Router();


// logique pour la route 'reservations'
Router.route('/reservations')
    .get(async (_, res) => {
        // Récupération de TOUTES les reservations dans la base
        // await = attends la reponse
        let reservations = await ReservationModel.find();
        if (reservations.length === 0) {
            res.status(404);
        } else {
            res.status(200);
        }

        res.json(reservations);
    })
    .post(async (req, res) => {
        let newReservation = req.body;
        try {
            let resp = await ReservationModel.create(newReservation);
            res.status(201).json(resp);
        } catch (err) {
            console.error(err);
            sendErrMessage(res, err);
        }
    });

// logique pour la route 'reservations/id'
Router.route('/reservations/:id')
    .get(async (req, res) => {
        try {
            // recherche d'une reservation par id
            let reservation = await ReservationModel.findById(req.params.id);
            res.status(200).json(reservation);
        } catch (err) {
            sendErrMessage(res, err);
        }
    })
    .put(async (req, res) => {
        let newReservation = req.body;
        try {
            let resp = await ReservationModel.findByIdAndUpdate(req.params.id, newReservation);
            res.json(resp);
        } catch (err) {
            sendErrMessage(res, err);
        }
    })
    .delete(async (req, res) => {
        try {
            let resp = await ReservationModel.findByIdAndDelete(req.params.id);
            req.json(resp);
        } catch (err) {
            sendErrMessage(res, err);
        }
    });

// export de la route
module.exports = Router;
const sendErrMessage = (res, err) => {
    res.status(400).json({
        ok: false,
        message: err.message
    });
}

