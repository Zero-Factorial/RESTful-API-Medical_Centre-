const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor')

// get a list of ninjas from the db
router.get('/doctors', function(req, res,next){
    Doctor.find({}).then(function(doctors){
        res.send(doctors);
    });
});

// add a new ninja to the db
router.post('/doctors', function(req, res,next){
    Doctor.create(req.body).then(function(doctor){
        res.send(doctor);
      }).catch(next);

});  
    

// update a ninja in the db
router.put('/doctors/:id', function(req, res,next){
    Doctor.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
          Doctor.findOne({_id:req.params.id}).then(function(doctor){
            res.send(doctor);
          });
     });    
});


router.delete('/doctors/:id', function(req, res,next){
    Doctor.findByIdAndRemove({_id:req.params.id}).then(function(doctor){
      res.send(doctor);
    });
    
});

module.exports = router;
