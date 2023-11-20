const mongoose = require("mongoose");
const foodschema= new mongoose.Schema({
name:{
    type: String,
    required: true,
},
price:{
    type: Number,
    required: true,
}, 
 avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  }, 
category:{
    type: String,
    required: true,
},
desc:{
    type: String,
    required: true,
},
})
const food = new mongoose.model('food',foodschema);
module.exports = food;