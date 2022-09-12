// Rutas Usuarios

const router = require('express').Router()

const usuarioController = require('../controllers/usuario.controller')

router.get('/', usuarioController.listar)
router.post('/', usuarioController.agregar)
router.get('/:idUsuario', usuarioController.getInfo)

module.exports = router
