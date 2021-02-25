const router = require('express').Router();
const {
  crearMascota,
  obtenerMascota,
  modificarMascota,
  eliminarMascota
} = require('../controllers/mascotas')

router.get('/', obtenerMascota)
router.post('/', crearMascota)
router.put('/:id', modificarMascota)
router.delete('/:id', eliminarMascota)

module.exports = router;