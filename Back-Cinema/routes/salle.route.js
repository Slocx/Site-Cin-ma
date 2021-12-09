// import du framework
const express = require('express');

const SalleModel = require('../models/salle.model');

// récupération du Router Express
const Router = express.Router();


// Pour rechercher un salle avec query
// GET sur http://localhost:3000/salles/search?
Router.route('/salles/search')
    .get(async (req, res) => {
        console.log(req.query);
        let searchParams = req.query;
        let salles = await SalleModel.find({ ...searchParams });
        res.json(salles);
    });
// logique pour la route 'salles'
Router.route('/salles')
    .get(async (_, res) => {
        // Récupération de TOUS les films dans la base
        // await = attends la reponse
        let salles = await SalleModel.find();

        if (salles.length === 0) {
            res.status(404);
        } else {
            res.status(200);
        }

        res.json(salles);
    })
    .post(async (req, res) => {
        let newSalle = req.body;
        try {
            let resp = await SalleModel.create(newSalle);
            res.status(201).json(resp);
        } catch (err) {
            console.error(err);
            sendErrMessage(res, err);
        }
    });

// logique pour la route 'salles/id'
Router.route('/salles/:id')
    .get(async (req, res) => {
        try {
            // recherche d'une salle par id
            let salle = await SalleModel.findById(req.params.id);
            res.status(200).json(salle);
        } catch (err) {
            sendErrMessage(res, err);
        }
    })
    .put(async (req, res) => {
        let newSalle = req.body;
        try {
            let resp = await SalleModel.findByIdAndUpdate(req.params.id, newSalle);
            res.json(resp);
        } catch (err) {
            sendErrMessage(res, err);
        }
    })
    .patch(async (req, res) => {
        // Recherche du salle à mettre à jour
        let salle = await SalleModel.findById(req.params.id);
        if (salle) {
            // Object.keys retourne les clés d'un objets
            Object.keys(req.body).forEach((key) => {
                // mise à jour partielle
                salle[key] = req.body[key];
            });
            // je met à jour la salle
            await SalleModel.findByIdAndUpdate(req.params.id, salle);
            res.status(200);
            res.json(salle);
        } else {
            res.status(404);
            res.end();
        }
    })
    .delete(async (req, res) => {
        try {
            let resp = await SalleModel.findByIdAndDelete(req.params.id);
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

