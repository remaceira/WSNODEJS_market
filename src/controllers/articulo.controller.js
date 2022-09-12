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
            console.log('Prueba articulos/agregar!')

            res.json({
                mensaje: 'Se ejecutó el POST articulos/agregar!!!'
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