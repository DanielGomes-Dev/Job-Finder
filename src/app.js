const express = require('express');
const app = express();

const database = require('./database/connection');


//Databse Connection;
database.authenticate()
    .then(() => {
        console.log('conectou');
    })
    .catch(err => {
        console.log(err);
    })

//Routes
app.get('/', (req, res) => {
    res.json({ msg: 'ok' });
})

module.exports = app;