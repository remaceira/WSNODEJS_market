module.exports = {

    listar: async (req, res) => {
        try {
            console.log('Prueba ventas/listar!')

            res.json({
                mensaje: 'Se ejecutó el GET ventas/listar!!!'
            })
        } 
        catch (error) {
            console.log('Error: ' + error)    
        }
    },

    agregar: async (req, res) => {
        try {
			var importeTotal = req.body.importeTotal || 0.0
			
            console.log('Prueba ventas/agregar! Importe total: $' + importeTotal)

            res.json({
                mensaje: 'Se ejecutó el POST ventas/agregar!!! Importe total: $' + importeTotal
            })
        } 
        catch (error) {
            console.log('Error: ' + error)    
        }
    },
    
    getInfo: async (req, res) => {
        try {
            console.log('Prueba ventas/getInfo! idVenta: ' + req.params.idVenta)

            res.json({
                mensaje: 'Se ejecutó el GET ventas/getInfo!!! idVenta: ' + req.params.idVenta
            })
        } 
        catch (error) {
            console.log('Error: ' + error)    
        }
    },    
}