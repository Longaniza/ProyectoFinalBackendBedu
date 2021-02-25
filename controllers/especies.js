/*  Archivo controllers/usuarios.js
 *  Simulando la respuesta de objetos Usuario
 *  en un futuro aquí se utilizarán los modelos
 */

// importamos el modelo de usuarios
const Especie = require('../models/Especie')

function crearEspecie(req, res) {
    // Instanciaremos un nuevo usuario utilizando la clase usuario
    var especie = new Especie(req.body);
    res.status(201).send(especie);
}
function obtenerEspecies(req, res) {
    var especie1 = new Especie(1, 'Gato', 'Felis silvestris catus');
    var especie2 = new Especie(2, 'Gatito', 'Felis silvestris catus');
    res.send([especie1, especie2]);
}
function modificarEspecie(req, res) {
    var especie1 = new Especie(req.params.id, 'Gato', 'Felis silvestris catus');
    var modificaciones = req.body;
    especie1 = { ...especie1, ...modificaciones };
    res.send(especie1);
}
function eliminarEspecie(req, res) {
    // se simula una eliminación de usuario, regresando un 200
    res.status(200).send(`Mascota ${req.params.id} eliminada`);
}
// exportamos las funciones definidas
module.exports = {
    crearEspecie,
    obtenerEspecies,
    modificarEspecie,
    eliminarEspecie
}