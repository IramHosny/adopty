const mongoose = require("mongoose");
const schema = mongoose.Schema;

const adoptCatSchema = new schema({
    user_name : {type:String , required:true},
    user_email: {type: String, required: true,},
    cat_adopted: {type: String, required: true,},
    user_information1:{type: String, required: true,},
    user_information2:{type: String, required: true,},
    user_information3:{type: String, required: true,},
    date : {type: String, required:true},
    status: {type: String ,default:"under processing "},
   
});
  
  const adoptCat = mongoose.model('adoptCat', adoptCatSchema);
  module.exports = adoptCat ;
