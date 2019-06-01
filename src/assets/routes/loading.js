var express = require('express');
var router = express.Router();
var moment = require('moment');


router.get('/inicioAlumnos', (req, res, next) => {
    //Recibir parámetros
    res.sendFile('inicioAlumnos');
  });

  module.exports = router;