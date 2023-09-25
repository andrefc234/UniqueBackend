const Factura = require('../models/factura');

// Create a new Factura
exports.createFactura = async (req, res) => {
  try {
    const newFactura = new Factura(req.body);
    const savedFactura = await newFactura.save();
    res.status(201).json({
      success: true,
      data: savedFactura,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Get all Facturas
exports.getAllFacturas = async (req, res) => {
  try {
    const facturas = await Factura.find();
    res.status(200).json({
      success: true,
      data: facturas,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Get a Factura by ID
exports.getFacturaById = async (req, res) => {
  try {
    const factura = await Factura.findById(req.params.id);
    if (!factura) {
      return res.status(404).json({
        success: false,
        error: 'Factura not found',
      });
    }
    res.status(200).json({
      success: true,
      data: factura,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Update a Factura by ID
exports.updateFacturaById = async (req, res) => {
  try {
    const updatedFactura = await Factura.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFactura) {
      return res.status(404).json({
        success: false,
        error: 'Factura not found',
      });
    }
    res.status(200).json({
      success: true,
      data: updatedFactura,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Delete a Factura by ID
exports.deleteFacturaById = async (req, res) => {
  try {
    const deletedFactura = await Factura.findByIdAndRemove(
      req.params.id
    );
    if (!deletedFactura) {
      return res.status(404).json({
        success: false,
        error: 'Factura not found',
      });
    }
    res.status(200).json({
      success: true,
      data: deletedFactura,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
