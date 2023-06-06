const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route("/paciente").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("pacientes")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/paciente/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("pacientes")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
recordRoutes.route("/paciente/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    nombre: req.body.nombre,
    rut: req.body.rut,
    edad: req.body.edad,
    prevision: req.body.prevision,
    acompanante: req.body.acompanante,
    motivo_de_consulta: req.body.motivo_de_consulta,
    horario_de_atencion: req.body.horario_de_atencion,
    fecha: req.body.fecha,
    examenes_solicitados: req.body.examenes_solicitados,
    diagnostico: req.body.diagnostico,
    tratamientos_e_indicaciones: req.body.tratamientos_e_indicaciones,
    numero_de_folio: req.body.numero_de_folio,
    clasificacion: req.body.clasificacion,
  };
  db_connect.collection("pacientes").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
recordRoutes.route("/paciente/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  let newvalues = {
    $set: {
      nombre: req.body.nombre,
      rut: req.body.rut,
      edad: req.body.edad,
      prevision: req.body.prevision,
      acompanante: req.body.acompanante,
      motivo_de_consulta: req.body.motivo_de_consulta,
      horario_de_atencion: req.body.horario_de_atencion,
      fecha: req.body.fecha,
      examenes_solicitados: req.body.examenes_solicitados,
      diagnostico: req.body.diagnostico,
      tratamientos_e_indicaciones: req.body.tratamientos_e_indicaciones,
      numero_de_folio: req.body.numero_de_folio,
      clasificacion: req.body.clasificacion,
    },
  };
  db_connect
    .collection("pacientes")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("paciente/del/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("pacientes").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
