const mongoose = require('mongoose')
const requisicion = new mongoose.Schema({
  obraId: {type:String},
  material:{type:[{
    Concepto:String,//obra
    Unidad:String,//obra
    Cantidad:Number,//obra
  }]},
  aceptado:{type:Boolean},
  fecha:{type:String}
});
const RequisicionList = mongoose.model('Requisicion', requisicion);
module.exports = {
  RequisicionList,
};