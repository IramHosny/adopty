const express = require("express");
const adoptCat = require("../models/adoptCat");
const adoptCatrouter = express.Router();
// add request_adoption for cat
// POST method

adoptCatrouter.post("/addadoptCat", async (req, res) => {
  try {
    let newadoptCat = new adoptCat({ ...req.body });
    let result = await newadoptCat.save();
    res.send({ adoptCat: result, msg: "successfully added" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// lister adoption requests for cats 
// Get method
adoptCatrouter.get("/alladoptCat", async (req, res) => {
  try {
    let result = await adoptCat.find();
    res.send({ adoptCat: result, msg: "all cats requests adoption " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// delete adoption request for cat 
// Delete method
adoptCatrouter.delete("/:id", async (req, res) => {
  try {
    let result = await adoptCat.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "request adoption for cat deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update request adoption for  cat
// update method
adoptCatrouter.put("/:id", async (req, res) => {
  try {
    let result = await adoptCat.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { status: "accepted" } }
    );
    if (result) {
      res.send({ msg: "request adoption for cat updated" });
    } else {
      res.send({ msg: "no record found" });
    }
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
module.exports = adoptCatrouter;