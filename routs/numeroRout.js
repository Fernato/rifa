const {Router} = require('express');

const { crearNumero, getNumeros, getNumero, SeleccionarNumero, getNumerosCliente, getIngresos } = require('../controllers/numeroController');
const router = Router()

router.post('/new', crearNumero)

router.get('/', getNumeros)

router.get('/ingresos', getIngresos)


router.get('/:id', getNumero)

router.get('/numeroscliente/:id', getNumerosCliente)

router.put('/:id', SeleccionarNumero )



/*
router.delete('/:id', eliminarCliente)

router.put('/:id', actualizarCliente)
*/

module.exports = router;