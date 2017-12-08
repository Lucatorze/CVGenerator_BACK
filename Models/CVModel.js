    const mongoose = require('mongoose');

    const cvSchema = new mongoose.Schema({
        lastname: {
            type: String,
            required: [true, "Le champ nom de famille est requis"]
        },

        firstname: {
            type: String,
            required: [true, "Le champ prénom est requis"]
        },

        email: {
            type: String,
            required: [true, "L'email est requis"]
        },

        phone: {
            type: String,
            required: [true, 'Le numéro de téléphone est requis']
        },

        birthdate:{
            type: String,
            required: [true, 'La date de naissance est requise']
        },

        city:{
            type: String,
            required: [true, 'La ville est requis']
        },

        country:{
            type: String,
            required: [true, 'Le pays est requis']
        },

        photo:{
            type: String
        },

        job:{
            type: String
        },

        adress:{
            type: String,
            required: [true, 'L\'adresse est requise']
        },

        experience:[{
            jobTitle1:{type:String},
            compagny1:{type:String},
            place1:{type:String},
            dateStart1:{type:Date},
            dateEnd1:{type:Date},
            description1:{type:String},
            jobTitle2:{type:String},
            compagny2:{type:String},
            place2:{type:String},
            dateStart2:{type:Date},
            dateEnd2:{type:Date},
            Description2:{type:String},
        }],

        formation:[{
            name1:{type:String},
            qualification1:{type:String},
            place1:{type:String},
            dateStart1:{type:Date},
            dateEnd1:{type:Date},
            description1:{type:String},
            name2:{type:String},
            qualification2:{type:String},
            place2:{type:String},
            dateStart2:{type:Date},
            dateEnd2:{type:Date},
            Description2:{type:String},
        }],

        hobbie:{
            type:String 
        },

    }, {collection: 'cv'});

    const cvModel = mongoose.model('Collaborateur', cvSchema);

    module.exports = cvModel;

