const express = require('express')
const {createItem} = require('./../controllers/itemController.js')
const router = express.Router();
router.post('/item',createItem)
module.exports = router;