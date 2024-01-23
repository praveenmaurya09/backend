const express = require('express');
const router = express.Router();

const Note = require('./../models/Note');

// Notes Route (/)
router.get("/list/:userid", async function (req, res) {
    var notes = await Note.find({ userid: req.params.userid });
    res.json(notes);
});


// post Notes Route for fetching data using userid (/)
router.post("/list/", async function (req, res) {
    var notes = await Note.find({ userid: req.body.userid });
    res.json(notes);
});

// Add Notes Route (/) && Update
router.post("/add", async function (req, res) {

    await Note.deleteOne({ id: req.body.id});

    const newNote = new Note({
        id: req.body.id,
        userid: req.body.userid,
        title: req.body.title,
        content: req.body.content
    });
    await newNote.save();
    const response = { mesage: "New Note Createed! " + `id: ${req.body.id}` };
    res.json(response);
});


// Delete Notes Route (/)
router.post("/delete", async function(req,res) {
    await Note.deleteOne( {
        id: req.body.id
    });
    const response = { mesage: "Note Delerted! " + `id: ${req.body.id}`};
    res.json(response)
});


module.exports = router;



