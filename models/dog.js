const mongoose = require("mongoose");
const schema = mongoose.Schema;

const dogSchema = new schema({
    name : {type:String , required:true},
    breed: {type: String, required: true,},
    image: {type: String,required: true},
    description: {type: String, required: true,},
    location : {type:String , required:true},
    gender: {type: String, required: true,},
    age: {type: String, required: true,},
    images:{type:Array,required:true},
    status: {type: String, default:"available"},
});
  
  const dog = mongoose.model('dog', dogSchema);
  module.exports = dog ;