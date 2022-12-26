const {Schema, model } = require('mongoose');

const clienteSchema = Schema({

    cedula:{
        type: String,
        require: true,
        unique: true
    },

    nombre:{
        type: String,
    },

    apellidos:{
        type: String,
    },

    celular:{
        type: String,
    },
    
    direccion:{
        type: String,
    },

    diacobro:{
        type: String
    }
    
});

module.exports = model('clienteModel', clienteSchema);