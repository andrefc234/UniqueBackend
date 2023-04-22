const mongoose = require('mongoose')

const obra = new mongoose.Schema({
    obra: {type:String},
    direccion:{type:String},
    metrosC:{type:String},
    metrosT:{type:String},
    contactoF:{type:String},
    nombreCliente:{type:String},
    rfc:{type:String},
    material:{type:[{nombre:String,progreso:{compras:String,contaduria:String},partida:String,cantidad:String}]},
    curp:{type:String},
    direccionC:{type:String},
    telefono:{type:String},
    idRequerimientos:{type:[{id:String}]}
  }); 
const ObraList = mongoose.model('Obra', obra);
module.exports = ObraList