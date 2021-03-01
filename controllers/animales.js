const Animal = require('../models/Animal')

function crearAnimal(req, res) {
    let animal = new Animal(req.body)
    res.status(201).send(animal)
}

function obtenerAnimales(req, res) {
    let animal1 = new Animal(1, 40, "Pedro", "M")
    let animal2 = new Animal(2, 40, "Fernanda", "F")
    res.send([animal1, animal2])
}

function modificarAnimal(req, res) {
    let animal1 = new Animal(req.params.id, 40, "Pedro", "M")
    let modificaciones = req.body
    animal1 = { ...animal1, ...modificaciones }
    res.send(animal1)
}

function eliminarAnimal(req, res) {
    res.status(200).send(`Animal ${req.params.id} eliminado`)
}

module.exports = {
    crearAnimal,
    obtenerAnimales,
    modificarAnimal,
    eliminarAnimal
}