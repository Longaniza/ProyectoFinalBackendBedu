const router = require('express').Router();
const {
    crearEmpleado,
    obtenerEmpleados,
    modificarEmpleado,
    eliminarEmpleado
} = require('../controllers/empleados')

router.get('/', obtenerEmpleados)
router.post('/', crearEmpleado)
router.put('/', modificarEmpleado)
router.delete('/', eliminarEmpleado)

module.exports = router;