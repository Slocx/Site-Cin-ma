// import du framework
const express = require('express');

const ClientModel = require('../models/client.model');

// récupération du Router Express
const Router = express.Router();

// Pour rechercher un client avec query
// GET sur http://localhost:3000/clients/search?name=Laurent&phone=0634646464
// ne trouvera que les clients avec name=Laurent ET phone=0634646464
Router.route('/clients/search')
    .get(async (req, res) => {
        console.log(req.query);
        let searchParams = req.query;
        let clients = await ClientModel.find({ ...searchParams });
        res.json(clients);
    });

// logique pour la route 'clients'
Router.route('/clients')
    .get(async (_, res) => {
        // Récupération de TOUS les clients dans la base
        // await = attends la reponse
        let clients = await ClientModel.find();

        if (clients.length === 0) {
            res.status(404);
        } else {
            res.status(200);
        }

        res.json(clients);
    })
    .post(async (req, res) => {
        let newClient = req.body;
        try {
            let resp = await ClientModel.create(newClient);
            res.status(201).json(resp);
        } catch (err) {
            console.error(err);
            sendErrMessage(res, err);
        }
    });

// logique pour la route 'clients/id'
Router.route('/clients/:id')
    .get(async (req, res) => {
        try {
            // recherche d'un client par id
            let client = await ClientModel.findById(req.params.id);
            res.status(200).json(client);
        } catch (err) {
            sendErrMessage(res, err);
        }
    })
    .put(async (req, res) => {
        let newClient = req.body;
        try {
            let resp = await ClientModel.findByIdAndUpdate(req.params.id, newClient);
            res.json(resp);
        } catch (err) {
            sendErrMessage(res, err);
        }
    })
    .patch(async (req, res) => {
        // Recherche du client à mettre à jour
        let client = await ClientModel.findById(req.params.id);
        if (client) {
            // Object.keys retourne les clés d'un objets
            Object.keys(req.body).forEach((key) => {
                // mise à jour partielle
                client[key] = req.body[key];
            });
            // je met à jour le client
            await ClientModel.findByIdAndUpdate(req.params.id, client);
            res.status(200);
            res.json(client);
        } else {
            res.status(404);
            res.end();
        }
    })
    .delete(async (req, res) => {
        try {
            let resp = await ClientModel.findByIdAndDelete(req.params.id);
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

