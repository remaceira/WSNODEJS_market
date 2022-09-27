
const joi = require('joi')

let crearUsuario = joi.object({
    username: joi.string().required(),
    password: joi.string().required(),
    apellido: joi.string().optional(),
    nombre: joi.string().optional(),
    email: joi.string().required()
})

module.exports = {
    crearUsuario
}