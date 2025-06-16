const MensajeContacto = require('../models/mensajeContacto');

const crearMensajeContacto = async (req, res) => {
  try {
    const { nombre, email, mensaje } = req.body;
    const nuevoMensaje = new MensajeContacto({ nombre, email, mensaje });
    await nuevoMensaje.save();
    res.status(201).json({ mensaje: 'Mensaje guardado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al guardar el mensaje' });
  }
};

module.exports = { crearMensajeContacto };