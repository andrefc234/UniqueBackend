const Obra = require('../models/obra');
const { ObjectId } = require('mongodb');
exports.getObras = async (req, res) => {
  try {
    const obras = await Obra.find();
    res.status(200).json({ success: true, data: obras });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getObra = async (req, res) => {
  try {
    const obra = await Obra.findById(req.params.id);
    if (!obra) {
      return res.status(404).json({ success: false, error: 'Obra not found' });
    }
    res.status(200).json({ success: true, data: obra });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.createObra = async (req, res) => {
  try {
    const obra = await Obra.create(req.body);
    res.status(201).json({ success: true, data: obra });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.updateMaterialesPendientes = (req, res) => {
  const { id } = req.params;
  const { materialesPendientes } = req.body;

  ObraList.findById(id, (err, obra) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error finding obra', error: err });
    }

    if (!obra) {
      return res.status(404).json({ success: false, message: 'Obra not found' });
    }

    obra.materialesPendientes = materialesPendientes;

    obra.save((err) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Error updating materiales pendientes', error: err });
      }

      return res.status(200).json({ success: true, message: 'Materiales pendientes updated successfully' });
    });
  });
};

exports.removeMaterialesPendientes = async (req, res) => {
  const { id, materialPendientesId } = req.params;

  try {
    const obra = await Obra.findByIdAndUpdate(
      id,
      {
        $pull: { materialesPendientes: { _id: new ObjectId(materialPendientesId) } },
      },
      { new: true }
    );

    if (!obra) {
      return res.status(404).json({ success: false, message: 'Obra not found' });
    }

    return res.status(200).json({ success: true, message: 'Material pendiente removed', obra });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Error removing material pendiente', error });
  }
};


exports.updateObra = async (req, res) => {
  try {
    const obra = await Obra.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!obra) {
      return res.status(404).json({ success: false, error: 'Obra not found' });
    }
    res.status(200).json({ success: true, data: obra });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.deleteObra = async (req, res) => {
  try {
    const obra = await Obra.findByIdAndRemove(req.params.id);
    if (!obra) {
      return res.status(404).json({ success: false, error: 'Obra not found' });
    }
    res.status(200).json({ success: true, data: obra });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.addIdRequerimiento = async (req, res) => {
  const obraId = req.params.id;
  const requerimientoId = req.body.requerimientoId;

  try {
    const obra = await Obra.findByIdAndUpdate(
      obraId,
      { $push: { idRequerimientos: { id: requerimientoId } } },
      { new: true }
    );
    res.status(200).json(obra);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Server error' });
  }
};
