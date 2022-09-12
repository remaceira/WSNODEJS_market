module.exports = {

    listar: async (req, res) => {
        try {
            console.log('Prueba usuarios/listar!')

            res.json({
                mensaje: 'Se ejecutó el GET usuarios/listar!!!'
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

            res.json({
                mensaje: 'Se ejecutó el POST usuarios/agregar!!! Username: ' + username
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