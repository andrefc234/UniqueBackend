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
  deleteReciboNominaPersona,
  getRecibosNominaObraByDate, // Added route for getting reciboNominaObra by date
  getRecibosNominaPersonaByDate // Added route for getting reciboNominaPersona by date
} = require('../controller/recibo');

// Routes for reciboNominaObra
router.post('/obra', createReciboNominaObra);
router.get('/obra', getRecibosNominaObra);
router.get('/obra/:id', getReciboNominaObraById);
router.put('/obra/:id', updateReciboNominaObra);
router.delete('/obra/:id', deleteReciboNominaObra);
router.get('/obra/date', getRecibosNominaObraByDate); // Route for getting reciboNominaObra by date

// Routes for reciboNominaPersona
router.post('/persona', createReciboNominaPersona);
router.get('/persona', getRecibosNominaPersona);
router.get('/persona/:id', getReciboNominaPersonaById);
router.put('/persona/:id', updateReciboNominaPersona);
router.delete('/persona/:id', deleteReciboNominaPersona);
router.get('/persona/date', getRecibosNominaPersonaByDate); // Route for getting reciboNominaPersona by date

module.exports = router;
