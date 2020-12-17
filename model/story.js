const mongoose = require('mongoose');

const story = new mongoose.Schema({
    name:String,
    email:String,
    title:String,
    story:String
})

module.exports = mongoose.model('story', story);