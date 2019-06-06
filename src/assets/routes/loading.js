var express = require('express');
var router = express.Router();
var moment = require('moment');

// RUTAS DE ALUMNOS
router.get('/inicioAlumnos', (req, res, next) => {
    res.sendFile('inicioAlumnos');
  });
router.get('/perfilAlumnos', (req,res,next)=>{
  res.sendFile('perfilAlumnos');
});
router.get('/documentosAlumnos', (req,res,next)=>{
  res.sendFile('documentosAlumnos');
});
router.get('/filesAlumnos', (req,res,next)=>{
  res.sendFile('filesAlumnos');
});
router.get('/tutorialesAlumnos', (req,res,next)=>{
  res.sendFile('tutorialesAlumnos');
});
router.get('/salonesAlumnos', (req,res,next)=>{
  res.sendFile('salonesAlumnos');
});
// RUTAS DE MAESTROS

// RUTA DE LOGOUT
router.get('/', (req,res,next)=>{
  res.sendFile('');
});
  module.exports = router;