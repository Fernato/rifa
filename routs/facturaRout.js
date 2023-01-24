const {Router} = require('express');


const { getFacturas, getFactura, crearFactura, eliminarFactura, actualizarFactura, getFacturasTotal, getCuentasIndividualesSocios, getFacturasNumero } = require('../controllers/facturaControler')

const router = Router()


router.post('/new', crearFactura)

router.get('/numero/:id', getFacturasNumero)

router.delete('/:id', eliminarFactura)

router.put('/:id', actualizarFactura)

router.get('/facturatotal', getFacturasTotal)

/*
router.get('/', getFacturas)





router.get('/cuentasFacturasSoc', getCuentasIndividualesSocios)

router.get('/:id', getFactura)


*/





module.exports = router;