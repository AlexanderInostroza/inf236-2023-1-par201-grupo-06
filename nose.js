const express = require('express');
//const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/nombre-de-tu-bd', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión exitosa a la base de datos');
}).catch(err => {
  console.error('Error al conectar a la base de datos', err);
  process.exit();
});

// Definición del esquema y modelo de datos
const ejemploSchema = mongoose.Schema({
  nombre: String,
  edad: Number
});

const Ejemplo = mongoose.model('Ejemplo', ejemploSchema);

// Configuración del servidor
const app = express();
app.use(bodyParser.json());

// Rutas del CRUD
app.get('/ejemplos', async (req, res) => {
  try {
    const ejemplos = await Ejemplo.find();
    res.json(ejemplos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/ejemplos/:id', async (req, res) => {
  try {
    const ejemplo = await Ejemplo.findById(req.params.id);
    res.json(ejemplo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/ejemplos', async (req, res) => {
  try {
    const ejemplo = new Ejemplo(req.body);
    const nuevoEjemplo = await ejemplo.save();
    res.json(nuevoEjemplo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/ejemplos/:id', async (req, res) => {
  try {
    const ejemplo = await Ejemplo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(ejemplo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/ejemplos/:id', async (req, res) => {
  try {
    const ejemplo = await Ejemplo.findByIdAndDelete(req.params.id);
    res.json(ejemplo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});