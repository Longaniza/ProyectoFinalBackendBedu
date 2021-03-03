const router = require('express').Router();
const {
    crearZona,
    obtenerZonas,
    modificarZona,
    eliminarZona
} = require('../controllers/zonas')

router.get('/', obtenerZonas)
router.post('/', crearZona)
router.put('/', modificarZona)
router.delete('/', eliminarZona)

module.exports = router;