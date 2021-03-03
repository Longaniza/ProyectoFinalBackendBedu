const router = require('express').Router();
const {
    crearObservacion,
    obtenerObservaciones,
    modificarObservacion,
    eliminarObservacion
} = require('../controllers/observaciones')

router.get('/', obtenerObservaciones)
router.post('/', crearObservacion)
router.put('/', modificarObservacion)
router.delete('/', eliminarObservacion)

module.exports = router;