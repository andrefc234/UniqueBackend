const express = require('express');
const router = express.Router();

const entregaController = require('../controller/entregaR');

// Create a new entrega
router.post('/', entregaController.createEntrega);

// Get all entregas
router.get('/', entregaController.getEntregas);

// Get a single entrega by id
router.get('/:id', entregaController.getEntregaById);

// Update a entrega by id
router.put('/:id', entregaController.updateEntrega);

// Delete a entrega by id
router.delete('/:id', entregaController.deleteEntrega);

module.exports = router;
