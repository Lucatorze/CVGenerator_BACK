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
            unique: true,
            required: [true, "L'email est requis"]
        },

        gender: {
            type: String,
            required: [true, "Le genre est requis"],
            enum: ['male','female']
        },

        phone: {
            type: String,
            unique: true,
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

        jobTitle:{
            type: String
        },

        experiences:[{
            jobTitle:{type:String},
            company:{type:String},
            place:{type:String},
            dateStart:{type:Date},
            dateEnd:{type:Date},
            Description:{type:Text},
         }],

        formations:[{
            name:{type:String},
            qualification:{type:String},
            place:{type:String},
            dateStart:{type:Date},
            dateEnd:{type:Date},
            Description:{type:Text},
        }],

        hobbies:{
            type:Text
        },

    }, {collection: 'cv'});

    const cvModel = mongoose.model('Collaborateur', cvSchema);

    module.exports = cvModel;

