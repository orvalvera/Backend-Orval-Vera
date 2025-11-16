const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        required : [true, 'Por favor ingrese su nombre']
    },
    email: {
        type: String,
        required : [true, 'Por favor ingrese su email'],
        unique: true
    },
    password: {
        type: String,
        required : [true, 'Por favor ingrese su contraseña']
    },
    esAdmin: {
        type: Boolean,
        default: false
    }
})
module.exports = mongoose.model('User', userSchema)