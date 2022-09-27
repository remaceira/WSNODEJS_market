// Rutas Usuarios

const router = require('express').Router()

const usuarioController = require('../controllers/usuario.controller')

const validateUsuario = require('../middlewares/validate')
const schemeUsuario = require('../middlewares/schemes/usuario.scheme')

router.get('/', usuarioController.listar)
router.post('/', validateUsuario(schemeUsuario.crearUsuario), usuarioController.agregar)
router.get('/:idUsuario', usuarioController.getInfo)

module.exports = router
