// import de mongoose
const mongoose = require('mongoose');

// import de film.model
const filmId = require('./film.model')

// Définition des attributs d'un utilisateur
const salleSchema = {
    
    id: { type: Number, required: true},
    numeroSalle: { type: Number, required: true},
    filmId: { type: Number, required: true},
    
}

// Création du modèle (Objet qui contient les fonctions pour communiquer avec Mongo)
const SalleModel = mongoose.model('salles', salleSchema)

// Export pour utiliser le modèle à l'exterieur
module.exports = SalleModel;
