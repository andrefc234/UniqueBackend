const express = require('express');
const router = express.Router();
const {createRequisicion,getRequisiciones,getRequisicionById,uploadPDF,updateRequisicion,deleteRequisicion} = require('../controller/requisicion');
const { upload } = require('../config/upload');
router.route('/')
  .get(getRequisiciones)
  .post(createRequisicion);

router.route('/:id')
  .get(getRequisicionById)
  .put(updateRequisicion)
  .delete(deleteRequisicion);
router.post('/upload/:requisicionId', upload.single('pdf'), uploadPDF);
module.exports = router;