
const express = require('express')
const app = express();
const path = require('path');
const connectDB = require('./config/db') 
const material = require('./routes/material')
const obra = require('./routes/obra') 
const empleados = require('./controller/empleado')      
const requisicion = require('./routes/requisicion')
const recibo = require('./routes/recibo')
const entregaR = require('./routes/entregaR')
const factura = require('./routes/factura')
const auth = require('./routes/auth')
app.use(express.json());
const PORT = 5000;
connectDB()
const allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  // intercept OPTIONS method
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
};
app.use(allowCrossDomain)
app.use('/uploads', express.static('uploads'))
app.use('/api/v1/material',material)
app.use('/api/v1/obra',obra)
app.use('/api/v1/empleado',empleados)
app.use('/api/v1/requisicion',requisicion)
app.use('/api/v1/recibo',recibo)
app.use('/api/v1/entregaR',entregaR)
app.use('/api/v1/factura',factura)
app.use('/api/v1/auth',auth)
const server = app.listen(
  PORT,
  console.log(
    `Server running in ${PORT}`
  )
);
/*
// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
*/
