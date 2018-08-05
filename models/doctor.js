const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const DoctorSchema = new Schema({
    name:{
        type: String,
        required:[true,'Name field is required']
    },
    specialist: {
        type:String
    },
    available:{
        type: Boolean,
        default:false
    }

    // add in geo location

}); 

const Doctor =  mongoose.model('doctor',DoctorSchema); 
module.exports = Doctor;