const {response} = require('express');

const clienteModel = require('../models/cliente');

const getClientes = async (req, res = response) => {
    
    try {
        
        const clientes = await clienteModel.find();
        clientes.sort(function (a, b) {
            if (a.nombre > b.nombre) {
            return 1;
            }
            if (a.nombre < b.nombre) {
            return -1;
            }
            return 0;
        })

        res.status(200).json({
            ok: true,
            clientes
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
    }

}
const getCliente = async ( req, res = response) => {
   
    try {        
        const {id} = req.params;

        const cliente = await clienteModel.findOne({_id:id})

        if(!cliente){

            return res.status(400).json({
                ok:false,
                msg: 'Ese socio no existe'
            })

        }
        res.status(200).json({
            ok: true,
            cliente
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
        
    }
}

const crearCliente = async ( req, res = response ) => {

    const {body} = req


    try {

        const {cedula} = body;

        let cliente = await clienteModel.findOne({cedula})

        if(cliente){
            return res.status(400).json({
                ok:false,
                msg: 'Ese socio ya existe'
            })
        }

        
       cliente = await new clienteModel(req.body)
       cliente.save()
       

        res.status(201).json({
            ok: true,
            cliente
        })


        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
    }
}

const eliminarCliente = async ( req, res = response) => {

    try {

        const {id} = req.params;

        let cliente = await clienteModel.findOne({_id:id})

        if(!cliente){
            return res.status(400).json({
                ok:false,
                msg: 'Ese socio no existe'
            })
        }

        await clienteModel.deleteOne({_id:id})
    
        res.status(200).json({
            ok: true
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
    }

}

const actualizarCliente = async ( req, res = response) => {

    try {
        
        const {id} = req.params;

        let cliente = await clienteModel.findOne({_id:id})

        if(!cliente){
            return res.status(400).json({
                ok:false,
                msg: 'Ese socio no existe'
            })
        }

        await clienteModel.updateOne({_id:id}, req.body)
    
        res.status(200).json({
            ok: true
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
    }

}

module.exports = {
    getClientes,
    getCliente,
    crearCliente,
    actualizarCliente,
    eliminarCliente,

}