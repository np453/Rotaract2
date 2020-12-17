var mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    meta_data:{}
});

module.expotrs = mongoose.model("file",fileSchema);