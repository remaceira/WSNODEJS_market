module.exports = {

    listar: async (req, res) => {
        try {
            console.log('Prueba articulos/listar!')

            res.json({
                mensaje: 'Se ejecutó el GET articulos/listar!!!'
            })
        } 
        catch (error) {
            console.log('Error: ' + error)    
        }
    },

    agregar: async (req, res) => {
        try {
			var precio = req.body.precioVenta || 0.0
			var nombreArticulo = req.body.nombreArticulo || ''
			
            console.log('Prueba articulos/agregar! Articulo: ' + nombreArticulo + ' Precio de venta: $' + precio)

            res.json({
                mensaje: 'Se ejecutó el POST articulos/agregar!!! Nombre articulo: ' + nombreArticulo + ' Precio de venta: $' + precio
            })
        } 
        catch (error) {
            console.log('Error: ' + error)    
        }
    },
    
    getInfo: async (req, res) => {
        try {
            console.log('Prueba articulos/getInfo! idArticulo: ' + req.params.idArticulo)

            res.json({
                mensaje: 'Se ejecutó el GET articulos/getInfo!!! idArticulo: ' + req.params.idArticulo
            })
        } 
        catch (error) {
            console.log('Error: ' + error)    
        }
    },    
}