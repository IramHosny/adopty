const mongoose = require("mongoose");
const schema = mongoose.Schema;

const adoptDogSchema = new schema({
    user_name : {type:String , required:true},
    user_email: {type: String, required: true,},
    dog_adopted: {type: String, required: true,},
    user_information1:{type: String, required: true,},
    user_information2:{type: String, required: true,},
    user_information3:{type: String, required: true,},
    date : {type: String, required:true},
    status: {type: String ,default:"under processing"},
});
  
  const adoptDog = mongoose.model('adoptDog', adoptDogSchema);
  module.exports = adoptDog ;
