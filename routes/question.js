const express = require("express");
const question = require("../models/question");
const questionrouter = express.Router();
// add question
// POST method

questionrouter.post("/addquestion", async (req, res) => {
  try {
    let newquestion = new question({ ...req.body });
    let result = await newquestion.save();
    res.send({ question: result, msg: "successfully added" });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// lister question
// Get method
questionrouter.get("/allquestion", async (req, res) => {
  try {
    let result = await question.find();
    res.send({ question: result, msg: "all questions " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
// delete question
// Delete method
questionrouter.delete("/:id", async (req, res) => {
  try {
    let result = await question.findByIdAndDelete({ _id: req.params.id });
    res.send({ msg: "question deleted " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});

// update question
// update method
questionrouter.put("/:id", async (req, res) => {
  try {
    let result = await question.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send({ msg: " question updated " });
  } catch (error) {
    res.send({ msg: "fail" });
    console.log(error);
  }
});
module.exports = questionrouter;