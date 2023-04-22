const mongoose = require('mongoose')


const material = new mongoose.Schema({
   P: {type:String},
   Codigo:{type:String},
   Descripcion:{type:String},
   Tipo:{type:String},
   Unidad:{type:String},
   Costo:{type:String}
  });
const MaterialList = mongoose.model('Material', material);
module.exports = MaterialList