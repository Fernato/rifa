const {Router} = require('express');

const { crearNumero, getNumeros, getNumero, SeleccionarNumero, getNumerosCliente } = require('../controllers/numeroController');
const router = Router()

router.post('/new', crearNumero)

router.get('/', getNumeros)


router.get('/:id', getNumero)

router.get('/numeroscliente/:id', getNumerosCliente)

router.put('/:id', SeleccionarNumero )



/*
router.delete('/:id', eliminarCliente)

router.put('/:id', actualizarCliente)
*/

module.exports = router;