const Zona = require('../models/Zona')

function crearZona(req, res,next) {
    // construye una instancia del modelo Usuario con los argumentos que recibe en la petición
    const usr = Zona.build(req.body);
    // Guarda esta instancia, es hasta este momento que se modifica la base de datos.
    usr.save().then(user => {
        return res.status(201).json(user.toAuthJSON())
    }).catch(next);
}

function obtenerZonas(req, res) {
    id, nombreZona
    let zona1 = new Zona(1, "Zona1")
    let zona2 = new Zona(2, "Acuario")
    res.send([zona1, zona2])
}

function modificarZona(req, res) {
    let zona1 = new Zona(1, "Zona1")
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