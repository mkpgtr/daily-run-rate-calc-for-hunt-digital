const express = require('express')

const router = express.Router()

const {getEntries,createEntries} = require('../controllers/entries.js')

router.get('/',getEntries)
router.post('/',createEntries)


module.exports = router