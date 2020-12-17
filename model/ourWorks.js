var mongoose = require('mongoose');


const ourWorksSchema = new mongoose.Schema({
    title:String,
    file: {
        data: Buffer, 
        contentType: String 
    },
});

module.exports = mongoose.model("ourWorks",ourWorksSchema);