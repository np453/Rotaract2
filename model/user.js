const mongoose = require('mongoose');
// const file = require('./file');

const fileSchema = new mongoose.Schema({
    file: {
        data: Buffer, 
        contentType: String 
    },
});

const story = new mongoose.Schema({
    name:String,
    title:String,
    story:String,
    files:[fileSchema],
    // moment:String
})

const userSchema = new mongoose.Schema({
    email: { type:String, required:true, max:255, min:3 },
    story: [ story ],
    date: { type:Date, default:Date.now }
})

module.exports = mongoose.model('User', userSchema);