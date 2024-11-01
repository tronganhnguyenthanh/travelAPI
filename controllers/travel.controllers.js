const travelModel = require("../models/travel.model")
// add travel
const addNewTravel = async (req, res) => {
  try{
   let travel = new travelModel({
    thumbnail:req.body.thumbnail,
    website:req.body.website
   })
   await travel.save()
   res?.status(200)?.json({message:"Travel added successfully"})
 }catch(error){
   res?.status(400).json({message:error})
 }
}
// Get all scenery
const getAllScenery = async (req, res) => {
  try{
    let scenery_list = await travelModel.find()
    res?.json(scenery_list)  
  }catch(error){
    res?.status(400).json({message:error})
  }
}
// Get detail scenery
const getSceneryDetail = async (req, res) => {
  try{
    let id = req.body._id
    let getDetailScenery = await travelModel.findOne({id:id})
    res?.json(getDetailScenery)
  }catch(error){
    res?.status(400)?.json({message:error}) 
  }
}
// Delete travel
const deleteTravel = async (req, res) => {
  try{
    let id = req?.body?._id
    await travelModel.findOneAndDelete({id:id})
    res?.json({message:"Travel deleted successfully"}) 
  }catch(error){
    res?.status(400)?.json({message:error}) 
  }
}
module.exports = {
 addNewTravel,
 getAllScenery,
 getSceneryDetail,
 deleteTravel
}