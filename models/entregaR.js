const mongoose = require('mongoose')


const entrega = new mongoose.Schema({
   nombre: {type:String},

  });
const EntregaList = mongoose.model('Entrega', entrega);
module.exports = EntregaList