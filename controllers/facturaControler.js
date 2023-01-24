const {response} = require('express');

const facturaModel = require('../models/factura');
const numeroModel = require('../models/numero')

/*
const getFacturas = async (req, res = response) => {

    try {
        
        const facturas = await facturaModel.find().populate(['numero']);

        facturas.sort((function (a, b) {
            if (a.fecha > b.fecha) {
            return 1;
            }
            if (a.fecha < b.fecha) {
            return -1;
            }
            return 0;
        }))
        
        suma = 0
        for (let fac of facturas){
            suma += fac.monto
        }
    
        res.status(200).json({
            ok: true,
            facturas,
            suma
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
    }

}
const getFactura = async ( req, res = response) => {
    console.log('esto es getFactura')
    try {        
        const { id } = req.params;

        const factura = await facturaModel.findOne({_id: id})
        

        if( !factura ){

            return res.status(400).json({
                ok:false,
                msg: 'Ese factura no existe'
            })

        }
        
        res.status(200).json({
            ok: true,
            factura
            
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
        
    }
}
*/

const getFacturasNumero = async ( req, res = response) => {

    try {        
        const { id } = req.params;

        const facturas = await facturaModel.find({numero: id})

        let total = 0

        for(let fac of facturas){
            total += fac.monto
        }

        res.status(200).json({
            ok: true,
            facturas,
            total
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
        
    }
}

const crearFactura = async ( req, res = response ) => {

    const {body} = req


    try {
        const { fecha, monto, numero } = body;

        var factura = await new facturaModel({
            fecha,
            monto
        } )
        factura.numero = numero
        await factura.save()


        const facturas = await facturaModel.find({numero: numero})
        let total = 0

        for(let fac of facturas){
            total += fac.monto
        }

        const cuerpo ={
            total
        }

        await numeroModel.updateOne({_id:numero}, cuerpo)
       
        res.status(201).json({
            ok: true,
            factura,
            total
        })


        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
    }
}

const eliminarFactura = async ( req, res = response) => {

    try {

        const { id } = req.params;


        let factura = await facturaModel.findOne({ _id : id })

        if( !factura ){
            return res.status(400).json({
                ok:false,
                msg: 'Ese factura no existe'
            })
        }

        await facturaModel.deleteOne({_id: id})

        const facturas = await facturaModel.find({numero: req.body.numero})

        let total = 0

        for(let fac of facturas){
            total += fac.monto
        }
        const cuerpo ={
            total: total,
        }
        await numeroModel.updateOne({_id:req.body.numero}, cuerpo)

    
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

const actualizarFactura = async ( req, res = response) => {

    try {
        
        const { id } = req.params;

        let factura = await facturaModel.findOne({ _id: id  })

        if(!factura){
            return res.status(400).json({
                ok:false,
                msg: 'Ese factura no existe'
            })
        }
        const cuerpoFactura = {
            monto: req.body.monto
        }
        await facturaModel.updateOne({ _id: id  }, cuerpoFactura)

        //Actualizar Numero

        const facturas = await facturaModel.find({numero: req.body.numero})

        let total = 0

        for(let fac of facturas){
            total += fac.monto
        }
        const cuerpoNumero ={
            total: total,
        }
        await numeroModel.updateOne({_id:req.body.numero}, cuerpoNumero)
        //
    
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


const getFacturasTotal = async (req, res = response) => {
    
    try {
        
        const facturas = await facturaModel.find();
        
        let total=0

        for ( let fac of facturas){
            total += fac.monto
        }
       

        res.status(200).json({
            ok: true,
            total,
         })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false
        })
    }

}
/*
const getCuentasIndividualesSocios = async (req, res = response ) => {
    try {
        
        const socios = await numeroModel.find();

        let listSoc=[]

        for (let soc of socios){
            let socio={id:'', cedula: '', nombre: '', monto:0}
            let facturas = await facturaModel.find({socio:{$all:[soc._id]}})
            socio.id = soc.id
            socio.cedula = soc.cedula
            socio.nombre = soc.nombre

            let suma = 0
            for(fac of facturas){
                suma += fac.monto
            }

            socio.monto=suma
           
            listSoc.push(socio)
        }

        let total = 0

        for (let soc of listSoc){
            total += soc.monto
        }

        listSoc.sort((function (a, b) {
            if (a.nombre > b.nombre) {
            return 1;
            }
            if (a.nombre < b.nombre) {
            return -1;
            }
            return 0;
        }))

        res.status(200).json({
            ok: true,
            listSoc,
            total
        })

    } catch (error) {

        console.log(error)
        
    }
}
*/
module.exports = {
    crearFactura,
    getFacturasNumero,
    actualizarFactura,
    eliminarFactura,
    getFacturasTotal,
    /*getFacturas,
    getFactura,
    getCuentasIndividualesSocios,
*/

}