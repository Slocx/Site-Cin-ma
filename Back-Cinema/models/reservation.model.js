// import de mongoose
const mongoose = require('mongoose');

// import de l'id de la Salle
const salleId = require('salle.model');

// Définition des attributs d'un utilisateur
const reservationSchema = {
    id: { type: Number, required: true},
    numeroSalle: { type: Number, required: true},
    salleId: { type: Number, required: true},
}

// Création du modèle (Objet qui contient les fonctions pour communiquer avec Mongo)
const ReservationModel = mongoose.model('reservations', reservationSchema)

// Export pour utiliser le modèle à l'exterieur
module.exports = ReservationModel;
