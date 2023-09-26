
const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'Please add a name']
  },
  clave: {
    type: String,
    required: [true, 'Please add clave'],
    unique: true,
    
  },
  telefono:{type:String,required:false},
  role: {
    type: String,
    enum: ['distribuidor', 'vendedor','admin','almacen','fabricante'],
    required:true
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minlength: 6,
    select: false
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Encrypt password using bcrypt


module.exports = mongoose.model('User', UserSchema);