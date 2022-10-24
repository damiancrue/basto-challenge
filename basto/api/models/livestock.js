const mongoose = require('../conexion_mongo');

// ID SENASA (Alfanumerico 16 chars) - Requerido
// Tipo Animal (Novillo, Toro, Vaquillona) - Requerido
// Peso animal (kg - numerico) - Opcional
// Nombre de potrero.(Texto hasta 200 chars) - Requerido
// Tipo de Dispositivo (COLLAR, CARAVANA) - Requerido
// Número de dispositivo. (Alfanumerico 8 chars) - Requerido

const Livestock = mongoose.model('Livestock', {
    id: {
        type: String,
        required: [true, 'code is required'],
        validate: {
            validator: function() {
            return this.id.length === 16
        },
        message: 'id has be 16 characteres'
        },
    },
    _id:{
        type: String,
        required: [true, '_id is required'],
    },  
    type: {
        type: String,
        enum: ['NOVILLO', 'TORO', 'VAQUILLONA'],
        required: [true, 'animal kind is required'],
    },
    weight: {
        type: Number,
        min: 0,
    },
    origin: {
        type: String,
        required: [true, 'origin is required'],
        validate: {
            validator: function() {
            return this.origin.length <= 200
        },
        message: 'too many chartacters'
    }
    },
    device: {
        type: String,
        enum: ['COLLAR', 'CARAVANA'],
        required: [true, 'device type is required'],
    },
    code: {
        type: String,
        required: [true, 'code is required'],
        validate: {
            validator: function() {
            return this.code.length === 8
        },
        message: 'code has be 8 characteres'
    }
    }
});

module.exports = Livestock;