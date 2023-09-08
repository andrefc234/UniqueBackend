const mongoose = require('mongoose')


const material = new mongoose.Schema({
   Concepto:{type:String},
   Unidad:{type:String},
   Partida:{type:String}
  });
const MaterialList = mongoose.model('Material', material);
module.exports = MaterialList