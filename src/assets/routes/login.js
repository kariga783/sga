var express = require('express');
var router = express.Router();
var moment = require('moment');

var query = require('./../db/connection');

router.post('/postLogin', (req, res, next) => {
    //Recibir parámetros
    var clienteCorreo = req.body.correoInstitucional,
        clientePassword = req.body.password;
    query.validar(clienteCorreo)
    .then(data => {
      if(clienteCorreo == data[0].correoInstitucional) {
          console.log("Correos iguales")
          if(clientePassword == data[0].password) {
            console.log("Password correcto")
            if(data[0].type == 1) {
              console.log("Alumno")
              res.send(req.body)
            } else { 
              console.log("Docente") }
            }
      } else{ next(new Error("Datos erroneos")); }
    })
  });

  module.exports = router;