/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de usuarios
const Solicitud = require('../models/Solicitud');
function crearSolicitud(req, res) {
    // Instanciaremos un nuevo usuario utilizando la clase usuario
    var solicitud = new Solicitud(req.body);
    res.status(201).send(solicitud);
}
function obtenerSolicitud(req, res) {
    var solicitud1 = new Solicitud(10, 1, '01/01/1990');
    var solicitud2 = new Solicitud(11, 2, '01/02/1990');
    res.send([solicitud1, solicitud2]);
}
function modificarSolicitud(req, res) {
    var solicitud1 = new Solicitud(req.params.id, 1, '01/01/1990');
    var modificaciones = req.body;
    solicitud1 = { ...solicitud1, ...modificaciones };
    res.send(solicitud1);
}
function eliminarSolicitud(req, res) {
    // se simula una eliminación de usuario, regresando un 200
    res.status(200).send(`Solicitud ${req.params.id} eliminada`);
}
// exportamos las funciones definidas
module.exports = {
    crearSolicitud,
    obtenerSolicitud,
    modificarSolicitud,
    eliminarSolicitud
}
