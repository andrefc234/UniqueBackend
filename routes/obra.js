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
  updateMaterialesAprobados,
  removeMaterialesAprobados,
  updateMaterialesEntregados
} = require('../controller/obra');

router.get('/', getObras);
router.get('/:id', getObra);
router.post('/', createObra);
router.put('/:id', updateObra);
router.delete('/:id', deleteObra);
router.put('/requerimientos/:id', addIdRequerimiento);
router.post('/materialesPendientes/:id', updateMaterialesPendientes);
// Define the route for removing materials from materialesAprobados
router.delete('/obra/:id/materialesAprobados/:materialAprobadoId', removeMaterialesAprobados);
router.put('/:id/materialesEntregados', updateMaterialesEntregados);

router.delete('/obra/:id/materialesPendientes/:materialPendientesId', removeMaterialesPendientes);
router.put('/ob/Aprobados/:id', updateMaterialesAprobados);
module.exports = router;
