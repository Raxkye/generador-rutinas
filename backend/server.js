const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB(); // ← conexión a MongoDB

const app = express();
app.use(cors());
app.use(express.json());

// Rutas (agregaremos después los archivos necesarios)
app.use('/api/user', require('./routes/user.routes'));
app.use('/api/routine', require('./routes/routine.routes'));
app.use('/api/profile', require('./routes/profile.routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));