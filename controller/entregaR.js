const EntregaList = require('../models/entregaR');

// Create a new entrega
exports.createEntrega = async (req, res) => {
  try {
    const { nombre } = req.body;
    const entrega = new EntregaList({ nombre });
    const newEntrega = await entrega.save();
    res.status(201).json(newEntrega);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get all entregas
exports.getEntregas = async (req, res) => {
  try {
    const entregas = await EntregaList.find();
    res.json(entregas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a single entrega by id
exports.getEntregaById = async (req, res) => {
  try {
    const entrega = await EntregaList.findById(req.params.id);
    if (!entrega) {
      return res.status(404).json({ message: 'Entrega not found' });
    }
    res.json(entrega);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a entrega by id
exports.updateEntrega = async (req, res) => {
  try {
    const { nombre } = req.body;
    const entrega = await EntregaList.findByIdAndUpdate(
      req.params.id,
      { nombre },
      { new: true }
    );
    if (!entrega) {
      return res.status(404).json({ message: 'Entrega not found' });
    }
    res.json(entrega);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a entrega by id
exports.deleteEntrega = async (req, res) => {
  try {
    const entrega = await EntregaList.findByIdAndDelete(req.params.id);
    if (!entrega) {
      return res.status(404).json({ message: 'Entrega not found' });
    }
    res.json({ message: 'Entrega deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
