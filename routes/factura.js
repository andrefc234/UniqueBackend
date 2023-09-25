const express = require('express');
const router = express.Router();
const {
  createFactura,
  getAllFacturas,
  getFacturaById,
  updateFacturaById,
  deleteFacturaById,
} = require('../controller/factura');

// Routes for Factura
router.post('/', createFactura);
router.get('/', getAllFacturas);
router.get('/:id', getFacturaById);
router.put('/:id', updateFacturaById);
router.delete('/:id', deleteFacturaById);

module.exports = router;
