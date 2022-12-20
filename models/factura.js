const {Schema, model } = require('mongoose');

const facturaSchema = Schema({

    fecha:{
        type: Date
    },

    monto:{
        type: Number,
    },
    
    numero:{
        type: Schema.ObjectId,
        ref: 'numeroModel'
    }
    
});

module.exports = model('facturaModel', facturaSchema);