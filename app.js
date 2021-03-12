// Importamos las bibliotecas necesarias
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');
var Sequelize = require('sequelize')

// Objeto global de la app
var app = express();


// Configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Agregamos el código de nuestro router (routes/index.js)
app.use('/v1', require('./routes'));

// Interceptando los errores 404
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

const sequelize = new Sequelize('mysql://urikwzjpplzzlfmn:Mb0IQrCVF8Sh4iK2i73G@bjxwq0uwifz3tl7mxfmk-mysql.services.clever-cloud.com:3306/bjxwq0uwifz3tl7mxfmk');
sequelize.authenticate()
    .then(() => {
        console.log('Its alive!!!!');
    })
    .catch(err => {
        console.log('No se conecto :(')
    })
// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function () {
    console.log('Escuchando en el puerto ' + server.address().port);
});