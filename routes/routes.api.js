const express = require("express")
const router = express.Router()
const travelController = require("../controllers/travel.controllers")
router.post("/travel/new", travelController.addNewTravel)
router.get("/scenery/list", travelController.getAllScenery)
router.get("/scenery/detail/:id", travelController.getSceneryDetail)
router.delete("/scenery/delete/:id", travelController.deleteTravel)
module.exports = router