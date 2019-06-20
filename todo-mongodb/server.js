const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
})

let port = process.env.port || 5000;

app.listen(port, () => console.log(`App listening on port ${port}`))