// server/index.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require('./db'); // conexión a MySQL

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor backend funcionando');
});

app.listen(PORT, () => {
    console.log(`✅ Servidor backend en http://localhost:${PORT}`);
});
