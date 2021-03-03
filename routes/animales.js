const router = require('express').Router();
const {
    crearAnimal,
    obtenerAnimales,
    modificarAnimal,
    eliminarAnimal
} = require('../controllers/animales')

router.get('/', obtenerAnimales)
router.post('/', crearAnimal)
router.put('/', modificarAnimal)
router.delete('/', eliminarAnimal)

module.exports = router;