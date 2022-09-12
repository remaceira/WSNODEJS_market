// Rutas Articulos

const router = require('express').Router()

const articuloController = require('../controllers/articulo.controller')

router.get('/', articuloController.listar)
router.post('/', articuloController.agregar)
router.get('/:idArticulo', articuloController.getInfo)

module.exports = router
