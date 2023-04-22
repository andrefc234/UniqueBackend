const express = require('express')
const router = express.Router()
const {createObra,getObra,getObras,addIdRequerimiento} = require('../controller/obra')


router.get('/',getObras)
router.get('/:id',getObra)
router.post('/crear',createObra)
router.put('/requerimientos/:id',addIdRequerimiento)
module.exports = router


