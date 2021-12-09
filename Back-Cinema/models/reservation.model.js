// import de mongoose
const mongoose = require('mongoose');

// Définition des attributs d'un utilisateur
const reservationSchema = ({
    date: {type: Date, required: true},
    filmId: { type: mongoose.Schema.Types.ObjectId, ref: 'filmId', required: true},
    salleId: { type: mongoose.Schema.Types.ObjectId, ref:'salleId', required: true},
}, { versionKey: false });

// Création du modèle (Objet qui contient les fonctions pour communiquer avec Mongo)
const ReservationModel = mongoose.model('reservations', reservationSchema)

// Export pour utiliser le modèle à l'exterieur
module.exports = ReservationModel;
