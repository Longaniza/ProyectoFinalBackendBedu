var router = require('express').Router();

router.get('/', (req, res) => {
    res.send('welcome to zoo api');
})


router.use('/especies', require('./especies'));
router.use('/empleados', require('./empleados'));
router.use('/animales', require('./animales'));
router.use('/observaciones', require('./observaciones'));
router.use('/zonas', require('./zonas'));
router.use('/revisiones', require('./revisiones'));


module.exports = router;