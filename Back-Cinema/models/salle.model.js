// import de mongoose
const mongoose = require('mongoose');

// Définition des attributs d'un utilisateur
const salleSchema = ({
    name: { type: String, required: true } 
}, { versionKey: false });


// Création du modèle (Objet qui contient les fonctions pour communiquer avec Mongo)
const SalleModel = mongoose.model('salles', salleSchema)

// Export pour utiliser le modèle à l'exterieur
module.exports = SalleModel;
