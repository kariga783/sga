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
              res.send(data)
            } else { 
              console.log("Docente") 
              res.send(data)
              }
            }
      } else{ next(new Error("Datos erroneos")); }
    })
  });
router.post('/hola',(req,res)=>{
  console.log("Hola");
})
router.post('/postInsertarDescargaVisual',(res,req)=>{
  query.insertarDescargaVisual().then(data=>{
    console.log("insert done")
  })
});

router.post('/postInsertarDescargaVirtualBox',(res,req)=>{
  query.insertarDescargaVirtual().then(info=>{
    console.log("insert done")
  })
});

router.post('/postInsertarDescargaPrologPdf',(res,req)=>{
  query.insertarDescargaPrlogPdf().then(info=>{
    console.log("insert done")
  })
});
router.post('/postInsertarDescargaProxiDoc',(res,req)=>{
  query.insertarDescargaProxiDoc().then(info=>{
    console.log("insert done")
  })
});
router.post('/postInsertarDescargaMarioHtml',(res,req)=>{
  query.insertarDescargaMarioHtml().then(info=>{
    console.log("insert done")
  })
});

  module.exports = router;