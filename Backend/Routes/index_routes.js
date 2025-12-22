const express = require("express")
const router = express.Router()

const contactmeRoute  = require("./contactmeRoute")
const dataRoutes = require("./dataRoutes")


router.use("/",contactmeRoute);
router.use("/",dataRoutes);



module.exports = router
