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
router.post('/factura', createFactura);
router.get('/factura', getAllFacturas);
router.get('/factura/:id', getFacturaById);
router.put('/factura/:id', updateFacturaById);
router.delete('/factura/:id', deleteFacturaById);

module.exports = router;
