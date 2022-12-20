const {Router} = require('express');

const { getClientes, getCliente, crearCliente, actualizarCliente, eliminarCliente } = require('../controllers/clienteController');
const router = Router()

router.get('/', getClientes)

router.get('/:id', getCliente)

router.post('/new', crearCliente)

router.delete('/:id', eliminarCliente)

router.put('/:id', actualizarCliente)

module.exports = router;