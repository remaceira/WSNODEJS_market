//Módulo encargado de conectar todas las rutas
const { Router } = require('express')

const usuariosRoutes = require('./usuario.routes')
const articulosRoutes = require('./articulo.routes')
const clientesRoutes = require('./cliente.routes')
const ventasRoutes = require('./venta.routes')

const rutas_init = () => {
    const router = Router()

    router.use('/usuarios', usuariosRoutes)
    router.use('/articulos', articulosRoutes)
    router.use('/clientes', clientesRoutes)
    router.use('/ventas', ventasRoutes)

    return router
}

module.exports = {
    rutas_init
}