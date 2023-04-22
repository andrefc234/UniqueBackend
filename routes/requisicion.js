const express = require('express');
const router = express.Router();
const {createRequisicion,getRequisiciones,getRequisicionById,updateRequisicion,deleteRequisicion} = require('../controller/requisicion');

router.route('/')
  .get(getRequisiciones)
  .post(createRequisicion);

router.route('/:id')
  .get(getRequisicionById)
  .put(updateRequisicion)
  .delete(deleteRequisicion);

module.exports = router;