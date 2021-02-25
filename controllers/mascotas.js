/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de usuarios
const Mascota = require('../models/Mascota')

function crearMascota(req, res) {
    // Instanciaremos un nuevo usuario utilizando la clase usuario
    var mascotas = new Mascota(req.body);
    res.status(201).send(mascotas);
}
function obtenerMascota(req, res) {
    var mascota1 = new Mascota(1, 'Firulais', 'Perro');
    var mascota2 = new Mascota(2, 'Firulais2', 'Perro2');
    res.send([mascota1, mascota2]);
}
function modificarMascota(req, res) {
    var mascota1 = new Mascota(req.params.id, 'Firulais', 'Perro');
    var modificaciones = req.body;
    mascota1 = { ...mascota1, ...modificaciones }
    res.send(mascota1)
}
function eliminarMascota(req, res) {
    // se simula una eliminación de usuario, regresando un 200
    res.status(200).send(`Mascota ${req.params.id} eliminada`);
}
// exportamos las funciones definidas
module.exports = {
    crearMascota,
    obtenerMascota,
    modificarMascota,
    eliminarMascota
}