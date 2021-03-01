const Observacion = require('../models/Observacion')

function crearObservacion(req, res) {
    let observacion = new Observacion(req.body)
    res.status(201).send(observacion)
}

function obtenerObservaciones(req, res) {
    let observacion1 = new Observacion(1, 55, 45, "El panda se ve enfermo", "01/01/1990")
    let observacion2 = new Observacion(2, 55, 76, "El leon tiene lastimada una pierna", "01/01/1990")
    res.send([observacion1, observacion2])
}

function modificarObservacion(req, res) {
    let observacion1 = new Observacion(req.params.id, 55, 76, "El panda se ve enfermo", "01/01/1990")
    let modificaciones = req.body
    observacion1 = { ...observacion1, ...modificaciones }
    res.send(observacion1)
}

function eliminarObservacion(req, res) {
    res.status(200).send(`Observacion ${req.params.id} eliminado`)
}

module.exports = {
    crearObservacion,
    obtenerObservaciones,
    modificarObservacion,
    eliminarObservacion
}