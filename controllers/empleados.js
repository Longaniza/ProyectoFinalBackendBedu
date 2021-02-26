//Importando el modelo de empleados
const Empleado = require('../models/Empleado')

function crearEmpleado(req, res) {
    //Instanciando un nuevo empleado utilizando la clase empleado
    let empleado = new Empleado(req.body)
    res.status(201).send(empleado)
}

function obtenerEmpleados(req, res) {
    //Simulando dos empleados y respondiendolos
    let empleado1 = new Empleado(1, 'Diego', '23', 'Morales', 'hombre', 'cuidador')
    let empleado2 = new Empleado(2, 'Jose', '21', 'Ivanov', 'hombre', 'veterinario')
    res.send([empleado1, empleado2])
}

function modificarEmpleado(req, res) {
    //Simulando un empleado previamente existente que el administrador modifica
    let empleado1 = new Empleado(req.params.id, 'Diego', '23', 'Morales', 'hombre', 'cuidador')
    let modificaciones = req.body
    empleado1 = { ...empleado1, ...modificaciones }
    res.send(empleado1)
}

function eliminarEmpleado(req, res) {
    //Se simula una eliminacion de usuario, regresando un 200
    res.status(200).send(`Empleado ${req.params.id} eliminado`)
}

//Exportando funciones definidas
module.exports = {
    crearEmpleado,
    obtenerEmpleados,
    modificarEmpleado,
    eliminarEmpleado
}