const ReciboN = require('../models/recibo');

exports.createReciboNomina = async (req, res) => {
  try {
    const reciboNomina = await ReciboN.create(req.body);
    res.status(201).json({
      success: true,
      data: reciboNomina,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

exports.getRecibosNomina = async (req, res) => {
  try {
    const recibosNomina = await ReciboN.find({});
    res.status(200).json({
      success: true,
      count: recibosNomina.length,
      data: recibosNomina,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

exports.getReciboNominaById = async (req, res) => {
  try {
    const reciboNomina = await ReciboN.findById(req.params.id);
    if (!reciboNomina) {
      return res.status(404).json({
        success: false,
        error: 'Recibo de Nomina not found',
      });
    }
    res.status(200).json({
      success: true,
      data: reciboNomina,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

exports.updateReciboNomina = async (req, res) => {
  try {
    const reciboNomina = await ReciboN.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!reciboNomina) {
      return res.status(404).json({
        success: false,
        error: 'Recibo de Nomina not found',
      });
    }
    res.status(200).json({
      success: true,
      data: reciboNomina,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

exports.deleteReciboNomina = async (req, res) => {
  try {
    const reciboNomina = await ReciboN.findByIdAndDelete(req.params.id);
    if (!reciboNomina) {
      return res.status(404).json({
        success: false,
        error: 'Recibo de Nomina not found',
      });
    }
    res.status(200).json({
      success: true,
      data: reciboNomina,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
