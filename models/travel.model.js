const mongoose = require("mongoose")
const travelSchema = new mongoose.Schema({
  thumbnail:{
   type:String
  },
  website:{
   type:String
  }
},{
 collection:"travel"
})
module.exports = mongoose.model("travelSchema", travelSchema)