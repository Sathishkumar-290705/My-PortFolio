const express = require("express")
const router = express.Router()

const dataController = require("../Controllers/dataController")

router.post("/upload_json", dataController.uploads);
router.get("/get_all", dataController.getAll);

module.exports = router;    

