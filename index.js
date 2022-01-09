const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// ':id' like placeholder
app.put('/post/:id', (req, res) => {
    // DATABASE STUFF
    res.json({
        id: req.params.id,
        title: "My title"
    })
})

app.listen(5000, ()=> console.log(`Server started on 5000`));