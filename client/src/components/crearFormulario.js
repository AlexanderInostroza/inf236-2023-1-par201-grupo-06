import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function CrearFormulario() {
 const [form, setForm] = useState({
    nombre:  "",
    rut:  "",
    edad:  "",
    prevision:  "",
    acompanante:  "",
    motivo_de_consulta:  "",
    horario_de_atencion: "",
    fecha: "",
    examenes_solicitados: "",
    diagnostico: "",
    tratamientos_e_indicaciones: "",
    numero_de_folio: "",
    clasificacion: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/paciente/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ nombre:  "",
   rut:  "",
   edad:  "",
   prevision:  "",
   acompanante:  "",
   motivo_de_consulta:  "",
   horario_de_atencion: "",
   fecha: "",
   examenes_solicitados: "",
   diagnostico: "",
   tratamientos_e_indicaciones: "",
   numero_de_folio: "",
   clasificacion: ""});
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Ingresar nuevo paciente</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="nombre">Nombre</label>
         <input
           type="text"
           className="form-control"
           id="nombre"
           value={form.nombre}
           onChange={(e) => updateForm({ nombre: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="rut">RUT</label>
         <input
           type="text"
           className="form-control"
           id="rut"
           value={form.rut}
           onChange={(e) => updateForm({ rut: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="numero_de_folio">Numero de folio</label>
         <input
           type="text"
           className="form-control"
           id="numero_de_folio"
           value={form.numero_de_folio}
           onChange={(e) => updateForm({ numero_de_folio: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="horario_de_atencion">Horario de atencion</label>
         <input
           type="text"
           className="form-control"
           id="horario_de_atencion"
           value={form.horario_de_atencion}
           onChange={(e) => updateForm({ horario_de_atencion: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="fecha">Fecha</label>
         <input
           type="text"
           className="form-control"
           id="fecha"
           value={form.fecha}
           onChange={(e) => updateForm({ fecha: e.target.value })}
         />
       </div>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="C1"
             checked={form.clasificacion === "C1"}
             onChange={(e) => updateForm({ clasificacion: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">C1</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="C2"
             checked={form.clasificacion === "C2"}
             onChange={(e) => updateForm({ clasificacion: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">C2</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="C3"
             checked={form.clasificacion === "C3"}
             onChange={(e) => updateForm({ clasificacion: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">C3</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="C4"
             checked={form.clasificacion === "C4"}
             onChange={(e) => updateForm({ clasificacion: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">C4</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="positionIntern"
             value="C5"
             checked={form.clasificacion === "C5"}
             onChange={(e) => updateForm({ clasificacion: e.target.value })}
           />
           <label htmlFor="positionIntern" className="form-check-label">C5</label>
         </div>
       </div>
       <div className="form-group">
         <label htmlFor="edad">Edad</label>
         <input
           type="text"
           className="form-control"
           id="edad"
           value={form.edad}
           onChange={(e) => updateForm({ edad: e.target.value })}
         />
       </div><div className="form-group">
         <label htmlFor="prevision">Prevision</label>
         <input
           type="text"
           className="form-control"
           id="prevision"
           value={form.prevision}
           onChange={(e) => updateForm({ prevision: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="acompanante">Acompanante</label>
         <input
           type="text"
           className="form-control"
           id="acompanante"
           value={form.acompanante}
           onChange={(e) => updateForm({ acompanante: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="motivo_de_consulta">Motivo de consulta</label>
         <input
           type="text"
           className="form-control"
           id="motivo_de_consulta"
           value={form.motivo_de_consulta}
           onChange={(e) => updateForm({ motivo_de_consulta: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="examenes_solicitados">Examenes solicitados</label>
         <input
           type="text"
           className="form-control"
           id="examenes_solicitados"
           value={form.examenes_solicitados}
           onChange={(e) => updateForm({ examenes_solicitados: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="diagnostico">Diagnostico</label>
         <input
           type="text"
           className="form-control"
           id="diagnostico"
           value={form.diagnostico}
           onChange={(e) => updateForm({ diagnostico: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="tratamientos_e_indicaciones">Tratamientos e indicaciones</label>
         <input
           type="text"
           className="form-control"
           id="tratamientos_e_indicaciones"
           value={form.tratamientos_e_indicaciones}
           onChange={(e) => updateForm({ tratamientos_e_indicaciones: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Crear ficha clínica"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}