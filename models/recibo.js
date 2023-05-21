const mongoose = require('mongoose')

const reciboNominaObra = new mongoose.Schema({
 obra:{type:String},
 pago:{type:Number},
 fecha:{type:Date},

  }); 


  const reciboNominaPersona = new mongoose.Schema({
    date: {
      type: Date,
      required: true
    },
    nombre: {
      type: String,
      required: true
    },
    cargo: {
      type: String,
      required: true
    },
    pagoJornal: {
      type: Number,
      required: true
    },
    salario: {
      type: Number,
      required: true
    },
    pagoJornada: {
      type: Number,
      required: true
    },
    diasTrabajados: {
      type: mongoose.Schema.Types.Mixed,
      required: false
    }
  });
  
 
  
const ReciboO = mongoose.model('ReciboNominaObra', reciboNominaObra);
const ReciboP = mongoose.model('ReciboNominaPersona', reciboNominaPersona);
module.exports = {
  ReciboO,ReciboP
}