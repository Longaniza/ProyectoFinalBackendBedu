const router = require('express').Router();
const {
    createEspecie,
    getEspeciesBySeletedFields,
    getEspecieById,
    updateEspecie,
    deleteEspecie,
} = require('../controllers/observaciones')

router.get('/',getEspeciesBySeletedFields);
router.get('/:idEspecie',getEspecieById);
router.post('/',createEspecie)
router.put('/:idEspecie', updateEspecie)
router.delete('/:idEspecie', deleteEspecie)

module.exports = router;