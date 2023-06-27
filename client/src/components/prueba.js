import React, { useState } from "react";
import { useNavigate } from "react-router";



const db = client.db('employees');
const collection = db.collection('pacientes');

// Realiza una consulta para obtener todos los documentos de la colección
collection.find({}).toArray(function(err, docs) {
    if (err) {
      console.log('Error al obtener los documentos:', err);
      return;
    }

    console.log('Documentos encontrados:', docs);
    client.close();
  });
