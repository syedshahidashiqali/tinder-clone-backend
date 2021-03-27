const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// model
let Cards = require('./models/cards.model');

// App config
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

// DB config
const uri = "mongodb+srv://admin:1st2nd3rd@cluster0.yjwvq.mongodb.net/tinderDB?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection has been established successfully.");
})


// API Endpoints

// GET parameter

app.get('/', (req, res) => res.status(200).send("Welcome, Backend Developers!!!"))
app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            return res.status(200).send(data)
        }
    })
});


// POST parameter
app.post('/tinder/cards', (req, res) => {
    const card = req.body;

    Cards.create(card, (err, data) => {
        if(err){
            return res.status(500).send(err)
        } else {
            return res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
