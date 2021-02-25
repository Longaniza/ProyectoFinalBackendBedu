const router = require('express').Router();
const {
    crearEspecie,
    obtenerEspecies,
    modificarEspecie,
    eliminarEspecie
} = require('../controllers/especies')

router.get('/', obtenerEspecies)
router.post('/', crearEspecie)
router.put('/:id', modificarEspecie)
router.delete('/:id', eliminarEspecie)

module.exports = router;