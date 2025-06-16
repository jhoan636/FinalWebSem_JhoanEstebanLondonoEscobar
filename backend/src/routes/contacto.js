const express = require('express');
const router = express.Router();
const { crearMensajeContacto } = require('../controllers/agenteContactoController');

// Ruta para enviar un mensaje de contacto
router.post('/', crearMensajeContacto);

module.exports = router;