const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor')

// get a list of ninjas from the db
router.get('/doctors', function(req, res,next){
    res.send({type: 'GET'});
});

// add a new ninja to the db
router.post('/doctors', function(req, res,next){
    Doctor.create(req.body).then(function(doctor){
        res.send(doctor);
      }).catch(next);

});  
    

// update a ninja in the db
router.put('/doctors/:id', function(req, res,next){
    res.send({type: 'PUT'});
});

// delete a ninja from the db
router.delete('/doctors/:id', function(req, res,next){
    res.send({type: 'DELETE'});
});

module.exports = router;
