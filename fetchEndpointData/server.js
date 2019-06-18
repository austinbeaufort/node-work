const express = require('express');
const app = express();

app.get('/api/people', (req, res) => {
    const people = [
        {id: 1, name: "john doe"},
        {id: 2, name: "peter pan"}
    ];

    res.json(people);
});

app.listen(5000, () => console.log('listening'));