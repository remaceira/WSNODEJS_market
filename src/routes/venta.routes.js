// Rutas Articulos

const router = require('express').Router()

const ventaController = require('../controllers/venta.controller')

router.get('/', ventaController.listar)
router.post('/', ventaController.agregar)
router.get('/:idVenta', ventaController.getInfo)

module.exports = router
