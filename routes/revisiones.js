const router = require('express').Router();
const {
    createRevision,
    getRevisionesBySeletedFields,
    getRevisionById,
    updateRevision,
    deleteRevision,
} = require('../controllers/observaciones')

router.get('/', getRevisionesBySeletedFields);
router.get('/:idRevision', getRevisionById);
router.post('/', createRevision)
router.put('/:idRevision', updateRevision)
router.delete('/:idRevision', deleteRevision)

module.exports = router;