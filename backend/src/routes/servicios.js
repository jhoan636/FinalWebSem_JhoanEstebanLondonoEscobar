const express = require('express');
const router = express.Router();
const { obtenerServicios, obtenerServicioPorId } = require('../controllers/agenteServicioController');

// Ruta para obtener la lista de servicios
router.get('/', obtenerServicios);

// Ruta para obtener los detalles de un servicio específico
router.get('/:id', obtenerServicioPorId);

module.exports = router;