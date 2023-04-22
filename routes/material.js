const express = require('express')
const {uploadMaterialList,getMaterialList} = require('../controller/material')
const router = express.Router()
const upload = require('../middleware/uploads')

router.post('/crear',upload.single('file'),uploadMaterialList)
router.get('/get', getMaterialList)

module.exports = router