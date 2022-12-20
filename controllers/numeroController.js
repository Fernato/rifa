

const {response} = require('express');

const numeroModel = require('../models/numero');


const getNumeros = async (req, res = response) => {
    
    try {
        
        const numeros = await numeroModel.find();
        
        numeros.sort(function (a, b) {
            if (a.numero > b.numero) {
            return 1;
            }
            if (a.numero < b.numero) {
            return -1;
            }
            return 0;
        })

        res.status(200).json({
            ok: true,
            numeros
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
    }

}

const getNumero = async ( req, res = response) => {
   
    try {        
        const {id} = req.params;

        const num = await numeroModel.findOne({numero:id})

        if(!num){

            return res.status(400).json({
                ok:false,
                msg: 'Ese numero no existe'
            })

        }
        
       var numero = await numeroModel.findById({_id:num._id})

        res.status(200).json({
            ok: true,
            numero
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
        
    }
}


const crearNumero = async ( req, res = response ) => {

    const {body} = req
    try {
/*
        const {cedula} = body;

        let cliente = await numeroModel.findOne({cedula})

        if(cliente){
            return res.status(400).json({
                ok:false,
                msg: 'Ese socio ya existe'
            })
        }
*/
        
       numero = await new numeroModel(req.body)
       numero.save()
       

        res.status(201).json({
            ok: true,
            numero
        })


        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
    }
}

const SeleccionarNumero = async ( req, res = response) => {
    const {body} = req
    try {
        
        const {id} = req.params;

        let numero = await numeroModel.findOne({_id:id})

        if(!numero){
            return res.status(400).json({
                ok:false,
                msg: 'Ese numero no existe'
            })
        }
        
        const cuerpo ={
            ocupado: body.ocupado,
            //cliente : mongoose.Types.ObjectId(body.cliente) 
        }
        await numeroModel.updateOne({_id:id}, cuerpo)
        numero.cliente = body.cliente
        await numero.save()
        res.status(200).json({
            ok: true,
            numero
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
    }

}

const getNumerosCliente = async ( req, res = response) => {
   
    try {        
        const {id} = req.params;
       
        const numeros = await numeroModel.find({cliente:id})

        res.status(200).json({
            ok: true,
            numeros
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
        
    }
}





module.exports = {
    crearNumero,
    getNumeros,
    getNumero,
    SeleccionarNumero,
    getNumerosCliente

}