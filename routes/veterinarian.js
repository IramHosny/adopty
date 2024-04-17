const express = require("express");
const veterinarian = require("../models/veterinarian");
const veterinarianrouter = express.Router();
// add veterinarian
// POST method

veterinarianrouter.post("/addveterinarian", async (req, res) => {
  try {
    let newveterinarian = new veterinarian({ ...req.body });
    let result = await newveterinarian.save();
    res.send({ veterinarian: result, msg: "successfully added" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// lister veterinarian
// Get method
veterinarianrouter.get("/allveterinarian", async (req, res) => {
  try {
    let result = await veterinarian.find();
    res.send({ veterinarian: result, msg: "all veterinarian " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// delete veterinarian
// Delete method
veterinarianrouter.delete("/:id", async (req, res) => {
  try {
    let result = await veterinarian.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "veterinarian deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update veterinarian
// update method
veterinarianrouter.put("/:id", async (req, res) => {
  try {
    let result = await veterinarian.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ msg: " veterinarian updated " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
module.exports = veterinarianrouter;