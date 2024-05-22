const express = require("express");
const adoptDog = require("../models/adoptDog");
const adoptDogrouter = express.Router();
// add request_adoption for dog
// POST method

adoptDogrouter.post("/addadoptDog", async (req, res) => {
  try {
    let newadoptDog = new adoptDog({ ...req.body });
    let result = await newadoptDog.save();
    res.send({ adoptDog: result, msg: "successfully added" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// lister  adoption requests for dogs 
// Get method
adoptDogrouter.get("/alladoptDog", async (req, res) => {
  try {
    let result = await adoptDog.find();
    res.send({ adoptDog: result, msg: "all dogs requests adoption " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// delete adoption request for dog 
// Delete method
adoptDogrouter.delete("/:id", async (req, res) => {
  try {
    let result = await adoptDog.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "request adoption for dog deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update request adoption for  dog
// update method
adoptDogrouter.put("/:id", async (req, res) => {
  try {
    let result = await adoptDog.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { status: "accepted" } }
    );
    if (result) {
      res.send({ msg: "request adoption for dog updated" });
    } else {
      res.send({ msg: "no record found" });
    }
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
module.exports = adoptDogrouter;