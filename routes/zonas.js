const router = require('express').Router();
const {
    createZona,
    getZonasBySeletedFields,
    getZonaById,
    updateZona,
    deleteZona
} = require('../controllers/zonas')

router.get('/',getZonasBySeletedFields);
router.get('/:idZona',getZonaById);
router.post('/',createZona)
router.put('/:idZona', updateZona)
router.delete('/:idZona', deleteZona)

module.exports = router;