const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({msg: "Hello"});
    // Content-Type of response: application/json (default)
})

app.listen(5000, ()=> console.log(`Server started on 5000`));