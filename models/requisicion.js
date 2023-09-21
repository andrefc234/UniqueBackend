const mongoose = require('mongoose')
const requisicion = new mongoose.Schema({
  obraId: {type:String},
  material:{type:[{
    Concepto:String,//obra
    Unidad:String,//obra
    Cantidad:Number,//obra
  }]},
  aceptado:{type:Boolean},
  fecha:{type:String},
  pdf: {
    data: Buffer, // Stores the file data
    contentType: String, // Stores the content type (e.g., 'application/pdf')
    fileName: String, // Stores the file name
  },
});
const RequisicionList = mongoose.model('Requisicion', requisicion);
module.exports = {
  RequisicionList,
};