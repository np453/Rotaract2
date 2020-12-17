const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    name:String,
    email:String,
    description:String,
    source:String
})

module.exports = mongoose.model('contact', contact);