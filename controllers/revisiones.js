const Revision = require('../models/Revision')

function crearRevision(req, res) {
    let revision = new Revision(req.body)
    res.status(201).send(revision)
}

function obtenerRevisiones(req, res) {
    let revision1 = new Revision(1, 55, 45, "La zona esta limpia", "01/01/1990")
    let revision2 = new Revision(2, 55, 76, "Todo perfecto", "01/01/1990")
    res.send([revision1, revision2])
}

function modificarRevision(req, res) {
    let revision1 = new Revision(req.params.id, 55, 76, "El panda se ve enfermo", "01/01/1990")
    let modificaciones = req.body
    revision1 = { ...revision1, ...modificaciones }
    res.send(revision1)
}

function eliminarRevision(req, res) {
    res.status(200).send(`Revision ${req.params.id} eliminada`)
}

module.exports = {
    crearRevision,
    obtenerRevisiones,
    modificarRevision,
    eliminarRevision
}