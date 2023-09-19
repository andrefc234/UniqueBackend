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
  removeMaterialesPendientes,
  updateMaterialesAprobados
} = require('../controller/obra');

router.get('/', getObras);
router.get('/:id', getObra);
router.post('/', createObra);
router.put('/:id', updateObra);
router.delete('/:id', deleteObra);
router.put('/requerimientos/:id', addIdRequerimiento);
router.post('/materialesPendientes/:id', updateMaterialesPendientes);
router.post('/Aprobados/:id', updateMaterialesAprobados);
router.delete('/obra/:id/materialesPendientes/:materialPendientesId', removeMaterialesPendientes);

module.exports = router;
