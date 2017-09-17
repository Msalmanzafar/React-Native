var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PatientDeatails = new Schema({
    PName: String,
    FatherName: String,
    Age: Number,
    Date: Number,
    TREATMENT: String,
    OPD: String
})

var patientData = mongoose.model("Patient", PatientDeatails)
module.exports = patientData;