const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
// Routes


app.get('/', (req, res) => {
    res.send('home page!');
})

app.get('/posts', (req, res) => {
    res.send('Posts page!')
})

// connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    () => {
        console.log('connected to db..')
})

let PORT = process.env.PORT || 3000;
app.listen(PORT), () => `app listening on port ${PORT}`;