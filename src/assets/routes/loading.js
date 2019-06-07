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
router.get('/inicioMaestros', (req, res, next) => {
  res.sendFile('inicioMaestros');
});
router.get('/perfilMaestros', (req,res,next)=>{
res.sendFile('perfilMaestros');
});
router.get('/documentosMaestros', (req,res,next)=>{
res.sendFile('documentosMaestros');
});
router.get('/filesMaestros', (req,res,next)=>{
res.sendFile('filesMaestros');
});
router.get('/tutorialesMaestros', (req,res,next)=>{
res.sendFile('tutorialesMaestros');
});
router.get('/salonesMaestros', (req,res,next)=>{
res.sendFile('salonesMaestros');
});
router.get('/peticionesMaestros', (req,res,next)=>{
  res.sendFile('peticionesMaestros');
  });
// RUTA DE LOGOUT
router.get('/', (req,res,next)=>{
  res.sendFile('');
});
  module.exports = router;