const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello from Express');
    // Content-Type of response: text/html (default)
})

app.listen(5000, ()=> console.log(`Server started on 5000`));