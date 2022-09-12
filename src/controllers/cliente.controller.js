module.exports = {

    listar: async (req, res) => {
        try {
            console.log('Prueba clientes/listar!')

            res.json({
                mensaje: 'Se ejecutó el GET clientes/listar!!!'
            })
        } 
        catch (error) {
            console.log('Error: ' + error)    
        }
    },

    agregar: async (req, res) => {
        try {
			var apellido = req.body.apellido || '';
			var nombre = req.body.nombre || '';
			
            console.log('Prueba clientes/agregar! Nombre y apellido: ' + nombre + ' ' + apellido)

            res.json({
                mensaje: 'Se ejecutó el POST clientes/agregar!!! Nombre y apellido: ' + nombre + ' ' + apellido
            })
        } 
        catch (error) {
            console.log('Error: ' + error)    
        }
    },
    
    getInfo: async (req, res) => {
        try {
            console.log('Prueba clientes/getInfo! idCliente: ' + req.params.idCliente)

            res.json({
                mensaje: 'Se ejecutó el GET clientes/getInfo!!! idCliente: ' + req.params.idCliente
            })
        } 
        catch (error) {
            console.log('Error: ' + error)    
        }
    },    
}