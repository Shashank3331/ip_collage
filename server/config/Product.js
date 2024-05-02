const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    price: String,
    duration: String
})

module.exports = mongoose.model('contents',ProductSchema);