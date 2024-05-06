const mongoose = require("mongoose");
const schema = mongoose.Schema;

const questionSchema = new schema({
    user_name : {type:String , required:true},
    user_email: {type: String, required: true,},
    contenu: {type: String, required: true,},
   
});
  
  const question = mongoose.model('question', questionSchema);
  module.exports = question ;
