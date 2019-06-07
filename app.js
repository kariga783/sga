const express = require('express'),
    http = require('http'),
    path = require('path'),
    bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

//Middleware Session
var login = require('./src/assets/routes/login');
var loading = require('./src/assets/routes/loading');

//View engune setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Middleware routes
app.use('/routes', login);
app.use('/routes/postLogin', login);
app.use('/loading', loading);
app.use('/loading/inicioAlumnos', loading);
app.use('/routes/postInsertarDescargaPrologPdf',login);
app.use('/routes/postInsertarDescargaVisual',login);
app.use('/routes/postInsertarDescargaVirtualBox',login);
app.use('/routes/postInsertarDescargaProxiDoc',login);
app.use('/routes/postInsertarDescargaMarioHtml',login);

app.use(express.static(__dirname + '/dist/sga'));

app.get('/*', (req,res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);
server.listen(port,() => console.log("¡WELCOME SGA!"));

module.exports = app;