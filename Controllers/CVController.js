'use strict';

const Cv = require('../Models/CVModel');

module.exports = {
    list : (req, res) => {
        Cv.find({})
            .exec()
            .then(cv => {
                if(cv === null){
                    return res.status(500).json({error:1,message:'Aucun cv trouvé'})
                }
                res.json(cv)
            })
            .catch(err => res.status(500).json({error:1,message: err.message}));
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
        Cv.create(req.body)
            .then(cv => res.json({success:1, message: 'C.V créé', inserted: cv}))
            .catch(err => res.status(500).json({error:1,message:err.message}));
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