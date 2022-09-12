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
            console.log('Prueba ventas/agregar! Importe total: ' + req.body.importeTotal)

            res.json({
                mensaje: 'Se ejecutó el POST ventas/agregar!!! Importe total: $' + req.body.importeTotal
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