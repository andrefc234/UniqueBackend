const express = require('express');
const router = express.Router();
const EmpleadoList = require('../models/empleado');

// GET all employees
router.get('/', async (req, res) => {
  try {
    const employees = await EmpleadoList.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET an employee by ID
router.get('/:id', getEmpleado, (req, res) => {
  res.json(res.empleado);
});

// CREATE a new employee
router.post('/', async (req, res) => {
    
  const empleado = new EmpleadoList(req.body);
  try {
    const newEmpleado = await empleado.save();
    console.log(newEmpleado)
    res.status(201).json(newEmpleado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE an employee
router.put('/:id', getEmpleado, async (req, res) => {
  if (req.body.nombre != null) {
    res.empleado.nombre = req.body.nombre;
  }
  if (req.body.cargo != null) {
    res.empleado.cargo = req.body.cargo;
  }
  if (req.body.pagoJornada != null) {
    res.empleado.pagoJornada = req.body.pagoJornada;
  }
  try {
    const updatedEmpleado = await res.empleado.save();
    res.json(updatedEmpleado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE an employee
router.delete('/:id', getEmpleado, async (req, res) => {
  try {
    await res.empleado.remove();
    res.json({ message: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getEmpleado(req, res, next) {
  let empleado;
  try {
    empleado = await EmpleadoList.findById(req.params.id);
    if (empleado == null) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.empleado = empleado;
  next();
}

module.exports = router;
