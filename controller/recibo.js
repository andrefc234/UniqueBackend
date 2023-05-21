const ReciboO = require('../models/recibo').ReciboO;
const ReciboP = require('../models/recibo').ReciboP;

// Create a new reciboNominaObra
exports.createReciboNominaObra = async (req, res) => {
  try {
    const reciboNominaObra = await ReciboO.create(req.body);
    res.status(201).json({
      success: true,
      data: reciboNominaObra,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Get all reciboNominaObra
exports.getRecibosNominaObra = async (req, res) => {
  try {
    const recibosNominaObra = await ReciboO.find({});
    res.status(200).json({
      success: true,
      count: recibosNominaObra.length,
      data: recibosNominaObra,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Get a single reciboNominaObra by id
exports.getReciboNominaObraById = async (req, res) => {
  try {
    const reciboNominaObra = await ReciboO.findById(req.params.id);
    if (!reciboNominaObra) {
      return res.status(404).json({
        success: false,
        error: 'Recibo de Nomina Obra not found',
      });
    }
    res.status(200).json({
      success: true,
      data: reciboNominaObra,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Update a reciboNominaObra by id
exports.updateReciboNominaObra = async (req, res) => {
  try {
    const reciboNominaObra = await ReciboO.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!reciboNominaObra) {
      return res.status(404).json({
        success: false,
        error: 'Recibo de Nomina Obra not found',
      });
    }
    res.status(200).json({
      success: true,
      data: reciboNominaObra,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Delete a reciboNominaObra by id
exports.deleteReciboNominaObra = async (req, res) => {
  try {
    const reciboNominaObra = await ReciboO.findByIdAndDelete(req.params.id);
    if (!reciboNominaObra) {
      return res.status(404).json({
        success: false,
        error: 'Recibo de Nomina Obra not found',
      });
    }
    res.status(200).json({
      success: true,
      data: reciboNominaObra,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Create a new reciboNominaPersona
exports.createReciboNominaPersona = async (req, res) => {
  try {
    const reciboNominaPersona = await ReciboP.create(req.body);
    res.status(201).json({
      success: true,
      data: reciboNominaPersona,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Get all reciboNominaPersona
exports.getRecibosNominaPersona = async (req, res) => {
  try {
    const recibosNominaPersona = await ReciboP.find({});
    res.status(200).json({
      success: true,
      count: recibosNominaPersona.length,
      data: recibosNominaPersona,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Get a single reciboNominaPersona by id
exports.getReciboNominaPersonaById = async (req, res) => {
  try {
    const reciboNominaPersona = await ReciboP.findById(req.params.id);
    if (!reciboNominaPersona) {
      return res.status(404).json({
        success: false,
        error: 'Recibo de Nomina Persona not found',
      });
    }
    res.status(200).json({
      success: true,
      data: reciboNominaPersona,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Update a reciboNominaPersona by id
exports.updateReciboNominaPersona = async (req, res) => {
  try {
    const reciboNominaPersona = await ReciboP.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!reciboNominaPersona) {
      return res.status(404).json({
        success: false,
        error: 'Recibo de Nomina Persona not found',
      });
    }
    res.status(200).json({
      success: true,
      data: reciboNominaPersona,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Delete a reciboNominaPersona by id
exports.deleteReciboNominaPersona = async (req, res) => {
  try {
    const reciboNominaPersona = await ReciboP.findByIdAndDelete(req.params.id);
    if (!reciboNominaPersona) {
      return res.status(404).json({
        success: false,
        error: 'Recibo de Nomina Persona not found',
      });
    }
    res.status(200).json({
      success: true,
      data: reciboNominaPersona,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
