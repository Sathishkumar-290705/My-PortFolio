const express = require("express")
const router = express.Router()

const {uploads , getAll} = require("../Controllers/dataController")

router.post("/upload_json", uploads);
router.get("/get_all", getAll);

module.exports = router;    

