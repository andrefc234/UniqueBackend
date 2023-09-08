const mongoose = require('mongoose')



const requisicion = new mongoose.Schema({
  obraId: {type:String},
  material:{type:[{
    concepto:String,//obra
    unidad:String,//obra
    pu:Number,
    cantidad:Number,//obra
    importe:Number,
    Observacion:String//compras y obra
  }]},
  aceptado:{type:Boolean},
  
});


const RequisicionList = mongoose.model('Requisicion', requisicion);

module.exports = {
  RequisicionList,

};