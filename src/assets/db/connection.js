var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'minivps.ddns.net',
      user : 'temp_external',
      password : '/eafts/*_*(KG%2682)',
      database : 'temp_external',
      port: '5506'
    }
  });
  
  // Mpdulo para exportar
  module.exports = {
    validar: function(correoInstitucional) {
      return knex('personUser')
      .where( 'correoInstitucional', correoInstitucional)
      .select('nombreCompleto','correoInstitucional','password','type')
    }
  }