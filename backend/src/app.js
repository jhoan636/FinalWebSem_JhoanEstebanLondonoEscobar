const express = require('express');
const mongoose = require('./config/db');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const contactoRoutes = require('./routes/contacto');
const serviciosRoutes = require('./routes/servicios');
require('dotenv').config();

const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/contacto', contactoRoutes);
app.use('/api/servicios', serviciosRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});