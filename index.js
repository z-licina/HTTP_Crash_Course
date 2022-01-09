const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/contact', (req, res) => {
    if (!req.body.name){
        res.status(400).send("Name is required");
    }
    // DATABASE STUFF
    res.status(201).send(`Thank you ${req.body.name}`)
})

app.listen(5000, ()=> console.log(`Server started on 5000`));