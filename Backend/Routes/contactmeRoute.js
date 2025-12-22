const express = require("express")
const { contactData } = require("../Controllers/contactmeController")
const router = express.Router()



router.post('/contactdata',contactData)



module.exports = router;