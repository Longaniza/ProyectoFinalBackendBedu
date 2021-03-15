const router = require('express').Router();
const {
    createAnimal,
    getAnimalesBySeletedFields,
    getAnimalById,
    updateAnimal,
    deleteAnimal,
} = require('../controllers/animales')

router.get('/',getAnimalesBySeletedFields);
router.get('/:idAnimal',getAnimalById);
router.post('/',createAnimal)
router.put('/:idAnimal', updateAnimal)
router.delete('/:idAnimal', deleteAnimal)

module.exports = router;