const mongoose = require('mongoose')


const empleado = new mongoose.Schema({
   nombre: {type:String},
   cargo:{type:String},
   pagoJornal:{type:Number},
   salario:{type:Number}

  });
const EmpleadoList = mongoose.model('Empleado', empleado);
module.exports = EmpleadoList