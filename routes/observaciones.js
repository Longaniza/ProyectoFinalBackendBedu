const router = require('express').Router();
const {
    createObservacion,
    getObservacionesBySeletedFields,
    getObservacionById,
    updateObservacion,
    deleteObservacion,
} = require('../controllers/observaciones')

router.get('/',getObservacionesBySeletedFields);
router.get('/:idObservacion',getObservacionById);
router.post('/',createObservacion)
router.put('/:idObservacion', updateObservacion)
router.delete('/:idObservacion', deleteObservacion)

module.exports = router;