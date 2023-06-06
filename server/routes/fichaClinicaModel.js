const mongoose = require('mongoose');

// Definir el esquema del modelo de la ficha clínica
const Schema = mongoose.Schema;
const fichaClinicaSchema = new Schema({
  nombre: String,
  edad: Number,
  sintomas: String,
  diagnostico: String,
  medicamentos: [String],
});

// Crear el modelo de la ficha clínica
const FichaClinica = mongoose.model('FichaClinica', fichaClinicaSchema);

module.exports = FichaClinica;
fichaClinicaController.js
const FichaClinica = require('./models/fichaClinicaModel');

// Implementación de las funciones CRUD para la ficha clínica
// ...

module.exports = {
  crearFichaClinica,
  leerFichasClinicas,
  leerFichaClinicaPorId,
  actualizarFichaClinica,
  eliminarFichaClinica,
};
index.js
const { crearFichaClinica, leerFichasClinicas, leerFichaClinicaPorId, actualizarFichaClinica, eliminarFichaClinica } = require('./controllers/fichaClinicaController');
const conexion = require('./conexion');

// Ejemplo de uso
const datosFichaClinica = {
  nombre: 'Paciente',
  edad: 30,
  sintomas: 'Dolor de cabeza, fiebre',
  diagnostico: 'Gripe',
  medicamentos: ['Ibuprofeno', 'Paracetamol'],
};

// Crear una nueva ficha clínica
crearFichaClinica(datosFichaClinica);

// Leer todas las fichas clínicas
leerFichasClinicas();

// Leer una ficha cl