const express = require("express");
const cat = require("../models/cat");
const catrouter = express.Router();
// add cat
// POST method

catrouter.post("/addcat", async (req, res) => {
  try {
    let newcat = new cat({ ...req.body });
    let result = await newcat.save();
    res.send({ cat: result, msg: "successfully added" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// lister cat
// Get method
catrouter.get("/allcat", async (req, res) => {
  try {
    let result = await cat.find();
    res.send({ cat: result, msg: "all cats " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// delete cat
// Delete method
catrouter.delete("/:id", async (req, res) => {
  try {
    let result = await cat.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "cat deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update cat
// update method
catrouter.put("/:id", async (req, res) => {
  try {
    let result = await cat.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ msg: " cat updated " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
module.exports = catrouter;