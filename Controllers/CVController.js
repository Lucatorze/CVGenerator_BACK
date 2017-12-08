'use strict';

const Cv = require('../Models/CVModel');

module.exports = {
    list : (req, res) => {
        Cv.find({})
            .exec()
            .then(cvs => {
                if(cvs === null){
                    return res.status(500).json({error:1,message:'Aucun cv trouvé'})
                }
                let cvMap = {};
                cvs.forEach((cv) => {
                    cvMap[cv._id] = {
                        id : cv._id,
                        firstname : cv.firstname,
                        lastname : cv.lastname,
                        mail : cv.mail,
                        phone : cv.phone,
                        birthdate : cv.birthdate,
                        city : cv.city,
                        country : cv.country,
                        photo : cv.photo,
                        job : cv.job,
                    };
                });
                res.status(200).json(cvMap);
            })
            .catch(err => {
                return res.status(500).json({error:1,message:err.message})
            });
    },

    findById : (req, res) => {
        Cv.findById(req.params.id)
            .exec()
            .then(cv => {
                if(cv === null){
                    return res.status(500).json({error:1,message:'Aucun C.V trouvé'})
                }
                res.json(cv)
            })
            .catch(err => res.status(500).json({error:1,message: err.message}));
    },

    create : (req, res) => {
        console.log(req.body)
        Cv.create(req.body)
            .then(cv => res.json({success:1, message: 'C.V créé', inserted: cv}))
            .catch(err => {
                return res.status(500).json({error:1,message:err.message})
            });
    },

    update : (req, res) => {
        Cv.findByIdAndUpdate(req.params.id, req.body, {new:true} )
            .exec()
            .then(cv => {
                if(cv === null){
                    return res.status(500).json({error:1,message:'C.V non trouvé'})
                }
                return cv
            })
            .then(cv => res.json({success:1, message: 'C.V modifié', updated: cv}))
            .catch(err => res.status(500).json({error:1,message:err.message}));
    },

    delete : (req, res) => {
        console.log(req.params.id)
        Cv.findByIdAndRemove(req.params.id)
            .exec()
            .then(cv => {
                if(cv === null){
                    return res.status(500).json({error:1,message:'C.V non trouvé'})
                }
                return cv
            })
            .then(cv => res.json({success:1, message: 'C.V supprimé', deleted: cv}))
            .catch(err => res.status(500).json({error:1,message:err.message}));
    }
};