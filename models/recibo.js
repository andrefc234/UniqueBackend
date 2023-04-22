const mongoose = require('mongoose')

const reciboNominaObra = new mongoose.Schema({
 obra:{type:String},
 pago:{type:Number},
 fecha:{type:Number},
 personaE:{type:String},
 letraP:{type:String},
 personaR:{type:String}


  }); 
  const reciboNominaPersona = new mongoose.Schema({
    obra:{type:String},
    pago:{type:Number},
    fecha:{type:Number},
    personaE:{type:String},
    letraP:{type:String},
    personaR:{type:String}
   
   
     });
const ReciboO = mongoose.model('ReciboNominaObra', reciboNominaObra);
const ReciboP = mongoose.model('ReciboNominaPersona', reciboNominaPersona);
module.exports = {
  ReciboO,ReciboP
}