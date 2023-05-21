const express = require('express');
const router = express.Router();
const {
  createReciboNominaObra,
  getRecibosNominaObra,
  getReciboNominaObraById,
  updateReciboNominaObra,
  deleteReciboNominaObra,
  createReciboNominaPersona,
  getRecibosNominaPersona,
  getReciboNominaPersonaById,
  updateReciboNominaPersona,
  deleteReciboNominaPersona
} = require('../controller/recibo');

// Routes for reciboNominaObra
router.post('/obra', createReciboNominaObra);
router.get('/obra', getRecibosNominaObra);
router.get('/obra/:id', getReciboNominaObraById);
router.put('/obra/:id', updateReciboNominaObra);
router.delete('/obra/:id', deleteReciboNominaObra);

// Routes for reciboNominaPersona
router.post('/persona', createReciboNominaPersona);
router.get('/persona', getRecibosNominaPersona);
router.get('/persona/:id', getReciboNominaPersonaById);
router.put('/persona/:id', updateReciboNominaPersona);
router.delete('/persona/:id', deleteReciboNominaPersona);

module.exports = router;
