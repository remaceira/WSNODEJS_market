const models = require('../database/models/index');

module.exports = {

    listar: async (req, res) => {
        try {
            console.log('Prueba usuarios/listar!')

            const usuarios = await models.usuario.findAll()

            res.json({
                success: true,
                data: {
                    usuarios: usuarios
                }
            })
        } 
        catch (error) {
            console.log('Error: ' + error)    
        }
    },

    agregar: async (req, res) => {
        try {
			var username = req.body.username || ''
			
            console.log('Prueba usuarios/agregar! Username: ' + username)

            const user = await models.usuario.create(req.body)

            res.json({
                success: true,
                data: {
                    id: user.id
                }
            })

        } 
        catch (error) {
            console.log('Error: ' + error)    
        }
    },
    
    getInfo: async (req, res) => {
        try {
            console.log('Prueba usuarios/getInfo! idUsuario: ' + req.params.idUsuario)

            res.json({
                mensaje: 'Se ejecutó el GET usuarios/getInfo!!! idUsuario: ' + req.params.idUsuario
            })
        } 
        catch (error) {
            console.log('Error: ' + error)    
        }
    },    
}