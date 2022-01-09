const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/contact', (req, res) => {
    res.send(req.body);
})

app.listen(5000, ()=> console.log(`Server started on 5000`));