const express = require('express');
const router = express.Router();
const {createReciboNomina,getRecibosNomina,getReciboNominaById,updateReciboNomina,deleteReciboNomina} = require('../controller/recibo');

// Create a new reciboNomina
router.post('/', createReciboNomina);

// Get all reciboNominas
router.get('/', getRecibosNomina);

// Get a single reciboNomina by ID
router.get('/:id', getReciboNominaById);

// Update a reciboNomina by ID
router.put('/:id', updateReciboNomina);

// Delete a reciboNomina by ID
router.delete('/:id', deleteReciboNomina);

module.exports = router;
