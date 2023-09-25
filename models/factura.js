const mongoose = require('mongoose');

const FacturaModel = new mongoose.Schema({
  fecha: { type: Date, required: true },
  factura: { type: String, required: false },
  importe: { type: Number, required: true },
  provedor: { type: String, required: true },
  material: [
    {
      Concepto: { type: String },
      Cantidad: { type: String },
      
    },
  ],
  banco: { type: String, required: true },
  Clabe: { type: String, required: true },
  nombreDeposito: { type: String, required: true },
  pagado: { type: Boolean, default: false },
});

const Factura = mongoose.model('Factura', FacturaModel);

module.exports = Factura;
