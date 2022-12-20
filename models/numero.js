const {Schema, model } = require('mongoose');

const numeroSchema = Schema({

    numero:{
        type: String
    },

    ocupado:{
        type: Boolean
    },

    total:{
        type: Number,
    },
    
    cliente:{
        type: Schema.ObjectId,
        ref: 'clienteModel'
    }
    
});

module.exports = model('numeroModel', numeroSchema);