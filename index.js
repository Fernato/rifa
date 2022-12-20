const express = require('express');
require('dotenv').config();
const dbConnection = require('./database/config');
const cors = require('cors');

//Crear el servidor de express
const app = express();

//base de datos

dbConnection();

//cors
app.use(cors());

// Directorio publico

app.use(express.static('public'));


// Lectura y parseo del body

app.use( express.json() );

//Rutas
app.use('/api/usuario', require('./routs/usuarioRout'));
app.use('/api/cliente', require('./routs/clienteRout'));
app.use('/api/numero', require('./routs/numeroRout'));
app.use('/api/factura', require('./routs/facturaRout'));
// Escuchar peticiones

const port = process.env.PORT || 5000;

app.listen(port , () => {
    console.log(`Servidor corriendo en puerto ${port}` );
} )