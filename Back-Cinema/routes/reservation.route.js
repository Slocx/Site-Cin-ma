// import du framework
const express = require('express');

const ReservationModel = require('../models/reservation.model');

// récupération du Router Express
const Router = express.Router();

// Pour rechercher un reservation avec query
// GET sur http://localhost:3000/reservations/search?
Router.route('/reservations/search')
    .get(async (req, res) => {
        console.log(req.query);
        let searchParams = req.query;
        let reservations = await ReservationModel.find({ ...searchParams });
        res.json(reservations);
    });
// logique pour la route 'reservations'
Router.route('/reservations')
    .get(async (_, res) => {
        // Récupération de TOUTES les reservations dans la base
        // await = attends la reponse
        let reservations = await ReservationModel.find().populate('filmId').populate('salleId');
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
            let reservation = await ReservationModel.findById(req.params.id).populate('filmId').populate('salleId');
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
    .patch(async (req, res) => {
        // Recherche du reservation à mettre à jour
        let reservation = await ReservationModel.findById(req.params.id);
        if (reservation) {
            // Object.keys retourne les clés d'un objets
            Object.keys(req.body).forEach((key) => {
                // mise à jour partielle
                reservation[key] = req.body[key];
            });
            // je met à jour la reservation
            await ReservationModel.findByIdAndUpdate(req.params.id, reservation);
            res.status(200);
            res.json(reservation);
        } else {
            res.status(404);
            res.end();
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

