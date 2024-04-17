const mongoose = require("mongoose");
const schema = mongoose.Schema;

const veterinarianSchema = new schema({
    fullname : {type:String , required:true},
    description : {type:String , required:true},
    image: {type: String,required: true},
    adress : {type:String , required:true},
    phonenumber : {type:String , required:true},
    });
  
  const veterinarian = mongoose.model('veterinarian', veterinarianSchema);
  module.exports = veterinarian ;
