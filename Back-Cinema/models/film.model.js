// import de mongoose
const mongoose = require('mongoose');

// Définition des attributs d'un utilisateur
const filmSchema = {
    id: { type: Number, required: true},
    name: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String }
}

// Création du modèle (Objet qui contient les fonctions pour communiquer avec Mongo)
const FilmModel = mongoose.model('films', filmSchema)

// Export pour utiliser le modèle à l'exterieur
module.exports = FilmModel;
