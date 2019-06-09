// var knex = require('knex')({
//     client: 'mysql',
//     connection: {
//       host : 'minivps.ddns.net',
//       user : 'temp_external',
//       password : '/eafts/*_*(KG%2682)',
//       database : 'temp_external',
//       port: '5506'
//     }
//   });
  var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '',
      database : 'temp_external',
      port: '3306'
    }
  });
  // Mpdulo para exportar
  module.exports = {
    validar: function(correoInstitucional) {
      return knex('personUser')
      .where( 'correoInstitucional', correoInstitucional)
      .select('nombreCompleto','correoInstitucional','password','type');
    },
    consultarInfoMaestros:function(correoInstitucional){
      return knex('personTeacher').
      where('correoInstitucional',correoInstitucional).
      select('nombreComplero','control_number','nombre_Departamento','correoInstitucional')
    },
    insertarDescargaVisual:function(){
      console.log("Insertar Visual");
      return knex('descargas').insert({fecha: new Date(),nombre_Archivo:'Visual Studio Code', idUser:'1'})
    },
    insertarDescargaPrlogPdf:function(){
      console.log("Insertar Prolog PDF");
      return knex('descargas').insert({fecha: new Date(),nombre_Archivo:'Prolog PDF', idUser:'1'})
    },
    insertarDescargaProxiDoc:function(){
      console.log("Insertar Proxi Doc");
      return knex('descargas').insert({fecha: new Date(),nombre_Archivo:'Proxi DOC', idUser:'1'})
    },
    insertarDescargaMarioHtml:function(){
      console.log("Insertar Mario HTML");
      return knex('descargas').insert({fecha: new Date(),nombre_Archivo:'Mario HTML', idUser:'1'})
    }, 
    insertarDescargaVirtual:function(){
      console.log("Insertar VirtualBox");
      return knex('descargas').insert({fecha: new Date(),nombre_Archivo:'VirtualBox', idUser:'1'})
    }
  }