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
