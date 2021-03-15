const router = require('express').Router();
const {
    createEmpleado,
    getEmpleadosBySeletedFields,
    getEmpleadoById,
    updateEmpleado,
    deleteEmpleado,
} = require('../controllers/empleados')

router.get('/', getEmpleadosBySeletedFields);
router.get('/:idEmpleado', getEmpleadoById);
router.post('/', createEmpleado)
router.put('/:idEmpleado', updateEmpleado)
router.delete('/:idEmpleado', deleteEmpleado)

module.exports = router;