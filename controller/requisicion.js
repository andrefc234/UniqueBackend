const {RequisicionList} = require('../models/requisicion');

exports.createRequisicion = async (req, res) => {
  try {
    const requisicion = await RequisicionList.create(req.body);
    res.status(201).json({
      success: true,
      data: requisicion,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

exports.getRequisiciones = async (req, res) => {
  try {
    const requisiciones = await RequisicionList.find({});
    res.status(200).json({
      success: true,
      count: requisiciones.length,
      data: requisiciones,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

exports.getRequisicionById = async (req, res) => {
  try {
    const requisicion = await RequisicionList.findById(req.params.id);
    if (!requisicion) {
      return res.status(404).json({
        success: false,
        error: 'Requisicion not found',
      });
    }
    res.status(200).json({
      success: true,
      data: requisicion,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

exports.updateRequisicion = async (req, res) => {
  try {
    const requisicion = await RequisicionList.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!requisicion) {
      return res.status(404).json({
        success: false,
        error: 'Requisicion not found',
      });
    }
    res.status(200).json({
      success: true,
      data: requisicion,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
exports.uploadPDF = async (req, res) => {
  try {
    const { requisicionId } = req.params;
    const requisicion = await RequisicionList.findById(requisicionId);

    if (!requisicion) {
      return res.status(404).json({ success: false, message: 'Requisicion not found' });
    }

    // Access uploaded file information
    const file = req.file;
    if (!file) {
      return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    // Store file data, content type, and file name in requisicion
    requisicion.pdf.data = file.buffer;
    requisicion.pdf.contentType = file.mimetype;
    requisicion.pdf.fileName = file.originalname;

    await requisicion.save();

    return res.status(200).json({ success: true, message: 'PDF uploaded successfully' });
  } catch (error) {
    console.error('Error uploading PDF:', error);
    return res.status(500).json({ success: false, message: 'Error uploading PDF', error: error });
  }
};

exports.deleteRequisicion = async (req, res) => {
  try {
    const requisicion = await RequisicionList.findByIdAndDelete(req.params.id);
    if (!requisicion) {
      return res.status(404).json({
        success: false,
        error: 'Requisicion not found',
      });
    }
    res.status(200).json({
      success: true,
      data: requisicion,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
exports.updateAceptado = async (req, res) => {
  try {
    const { id } = req.params;
    const { aceptado } = req.body;

    // Find the Requisicion document based on the provided IP address
    const requisicion = await RequisicionList.findOne({ _id: id });

    if (!requisicion) {
      return res.status(404).json({
        success: false,
        error: 'Requisicion not found',
      });
    }

    // Update the 'aceptado' field with the provided value
    requisicion.aceptado = aceptado;

    // Save the updated document
    await requisicion.save();

    res.status(200).json({
      success: true,
      data: requisicion,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
