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

  Obra.findById(id, (err, obra) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error finding obra', error: err });
    }

    if (!obra) {
      return res.status(404).json({ success: false, message: 'Obra not found' });
    }

    // Use the $push operator to add new materials to the existing array
    obra.materialesPendientes.push(...materialesPendientes);

    obra.save((err) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Error updating materiales pendientes', error: err });
      }

      return res.status(200).json({ success: true, message: 'Materiales pendientes updated successfully' });
    });
  });
};
exports.updateMaterialesAprobados = (req, res) => {
  const { id } = req.params;
  const { materialesAprobados } = req.body;

  Obra.findById(id, (err, obra) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error finding obra', error: err });
    }

    if (!obra) {
      return res.status(404).json({ success: false, message: 'Obra not found' });
    }

    // Use the $push operator to add new materials to the existing array
    obra.materialesAprobados.push(...materialesAprobados);

    obra.save((err) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Error updating materiales aprobados', error: err });
      }

      return res.status(200).json({ success: true, message: 'Materiales aprobados updated successfully' });
    });
  });
};
exports.updateMaterialesEntregados = (req, res) => {
  const { id } = req.params;
  const { materialesEntregados } = req.body;
  
  // Wrap the single object in an array
  const updatedMaterialesEntregados = [materialesEntregados];

  Obra.findById(id, (err, obra) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error finding obra', error: err });
    }
    
    if (!obra) {
      return res.status(404).json({ success: false, message: 'Obra not found' });
    }
    
    // Use the $push operator to add new materials to the existing array
    obra.materialesEntregados.push(...updatedMaterialesEntregados);
    
    obra.save((err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: 'Error updating materiales entregados', error: err });
      }
      
      return res.status(200).json({ success: true, message: 'Materiales entregados updated successfully' });
    });
  });
};

exports.removeMaterialesAprobados = async (req, res) => {
  const { id, materialAprobadoId } = req.params;

  try {
    const obra = await Obra.findByIdAndUpdate(
      id,
      {
        $pull: { materialesAprobados: { _id: new ObjectId(materialAprobadoId) } },
      },
      { new: true }
    );

    if (!obra) {
      return res.status(404).json({ success: false, message: 'Obra not found' });
    }

    return res.status(200).json({ success: true, message: 'Material aprobado removed', obra });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Error removing material aprobado', error });
  }
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
