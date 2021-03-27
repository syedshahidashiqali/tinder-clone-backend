// creating database schema using mongoose

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardsSchema = new Schema({
    name: String,
    imgUrl: String
});



const Cards = mongoose.model('Cards', cardsSchema);

module.exports = Cards;