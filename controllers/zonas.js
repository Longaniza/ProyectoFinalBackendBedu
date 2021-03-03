const Zona = require('../models/Zona')

function crearZona(req, res) {
    let zona = new Zona(req.body)
    res.status(201).send(zona)
}

function obtenerZonas(req, res) {
    id, nombreZona
    let zona1 = new Zona(1, "Zona1")
    let zona2 = new Zona(2, "Acuario")
    res.send([zona1, zona2])
}

function modificarZona(req, res) {
    let zona1 =  new Zona(1, "Zona1")
    let modificaciones = req.body
    zona1 = { ...zona1, ...modificaciones }
    res.send(zona1)
}

function eliminarZona(req, res) {
    res.status(200).send(`Zona ${req.params.id} eliminada`)
}

module.exports = {
    crearZona,
    obtenerZonas,
    modificarZona,
    eliminarZona
}