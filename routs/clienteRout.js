const {Router} = require('express');

const { getClientes, getCliente, crearCliente, actualizarCliente, eliminarCliente, getClientesDiaCobro } = require('../controllers/clienteController');
const router = Router()

router.get('/', getClientes)

router.get('/get/:id', getCliente)

router.post('/new', crearCliente)

router.delete('/delete/:id', eliminarCliente)

router.put('/put/:id', actualizarCliente)

router.get('/diacobro', getClientesDiaCobro)

module.exports = router;