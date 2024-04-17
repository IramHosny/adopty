const express = require("express");
const dog = require("../models/dog");
const dogrouter = express.Router();
// add dog
// POST method

dogrouter.post("/adddog", async (req, res) => {
  try {
    let newdog = new dog({ ...req.body });
    let result = await newdog.save();
    res.send({ dog: result, msg: "successfully added" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// lister dog
// Get method
dogrouter.get("/alldog", async (req, res) => {
  try {
    let result = await dog.find();
    res.send({ dog: result, msg: "all dogs " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// delete dog
// Delete method
dogrouter.delete("/:id", async (req, res) => {
  try {
    let result = await dog.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "dog deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update dog
// update method
dogrouter.put("/:id", async (req, res) => {
  try {
    let result = await dog.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ msg: " dog updated " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
module.exports = dogrouter;