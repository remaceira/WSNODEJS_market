module.exports = (scheme) => {

    return (req, res, next) => {
        let result = scheme.validate(req.body) //Valida los datos de entrada con el esquema

        if (result.error) {
            next(result.error) //Envía el error al controlador
        }
        else {
            next() //Continúa con la ejecución del controlador
        }
    }

}