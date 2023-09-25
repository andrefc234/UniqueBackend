const mongoose = require('mongoose');

const FacturaModel = new mongoose.Schema({
  idrequsicion:{type:String},
  nombreObra:{type:String},
  idObra:{type:String},
  fecha: { type: Date, required: true },
 
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
