// import du framework
const express = require('express');

const FilmModel = require('../models/film.model');

// récupération du Router Express
const Router = express.Router();

// Pour rechercher un film avec query
// GET sur http://localhost:3000/films/search?title=StarWars
// ne trouvera que les films avec en title=StarWars
Router.route('/films/search')
    .get(async (req, res) => {
        console.log(req.query);
        let searchParams = req.query;
        let users = await FilmModel.find({ ...searchParams });
        res.json(users);
    });

// logique pour la route 'films'
Router.route('/films')
    .get(async (_, res) => {
        // Récupération de TOUS les films dans la base
        // await = attends la reponse
        let users = await FilmModel.find();

        if (users.length === 0) {
            res.status(404);
        } else {
            res.status(200);
        }

        res.json(users);
    })
    .post(async (req, res) => {
        let newFilm = req.body;
        try {
            let resp = await FilmModel.create(newFilm);
            res.status(201).json(resp);
        } catch (err) {
            console.error(err);
            sendErrMessage(res, err);
        }
    });

// logique pour la route 'films/id'
Router.route('/films/:id')
    .get(async (req, res) => {
        try {
            // recherche d'un film par id
            let user = await FilmModel.findById(req.params.id);
            res.status(200).json(user);
        } catch (err) {
            sendErrMessage(res, err);
        }
    })
    .put(async (req, res) => {
        let newFilm = req.body;
        try {
            let resp = await FilmModel.findByIdAndUpdate(req.params.id, newFilm);
            res.json(resp);
        } catch (err) {
            sendErrMessage(res, err);
        }
    })
    .delete(async (req, res) => {
        try {
            let resp = await FilmModel.findByIdAndDelete(req.params.id);
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

