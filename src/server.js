// -- Initialization
const express = require('express');
const app = express();


// mongodb+srv://praveenmaurya09:<password>@todoappcluster.2w3xr7z.mongodb.net/?retryWrites=true&w=majority
const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());





mongoose.connect("mongodb+srv://praveenmaurya09:praveenmaurya09@todoappcluster.2w3xr7z.mongodb.net/tododb").then(
    function () {
        // -- App Routes
        // Home Route (/)
        app.get("/", function (req, res) {
            const response = {message: "Api Works!"};
            res.json(response);
        });
        const noteRouter = require('./routes/Note');
        app.use("/notes", noteRouter);
        


    });





// -- Starting server on a Port
app.listen(5000, function () {
    console.log("Server started at Port: 5000");
});
