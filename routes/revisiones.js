const router = require('express').Router();
const {
    crearRevision,
    obtenerRevisiones,
    modificarRevision,
    eliminarRevision
} = require('../controllers/revisiones')

router.get('/', obtenerRevisiones)
router.post('/', crearRevision)
router.put('/', modificarRevision)
router.delete('/', eliminarRevision)

module.exports = router;