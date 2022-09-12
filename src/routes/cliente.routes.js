// Rutas Clientes

const router = require('express').Router()

const clienteController = require('../controllers/cliente.controller')

router.get('/', clienteController.listar)
router.post('/', clienteController.agregar)
router.get('/:idCliente', clienteController.getInfo)

module.exports = router
