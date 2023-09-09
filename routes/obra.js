const express = require('express');
const router = express.Router();
const {
  createObra,
  getObra,
  getObras,
  updateObra,
  deleteObra,
  addIdRequerimiento,
  updateMaterialesPendientes,
 
} = require('../controller/obra');

router.get('/', getObras);
router.get('/:id', getObra);
router.post('/', createObra);
router.put('/:id', updateObra);
router.delete('/:id', deleteObra);
router.put('/requerimientos/:id', addIdRequerimiento);
router.delete('/materialesPendientes/:id', updateMaterialesPendientes);
module.exports = router;
