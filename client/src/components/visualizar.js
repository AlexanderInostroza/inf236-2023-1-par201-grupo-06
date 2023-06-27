import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Paciente = (props) => (
  <tr>
    <td>{props.paciente.rut}</td>
    <td>{props.paciente.nombre}</td>
    <td>{props.paciente.fecha}</td>
  </tr>
);

export default function Visualizar() {
  const [pacientes, setPacientes] = useState([]);

  const params = useParams();
  const rut = params.rut.toString();

  
  

  useEffect(() => {
    async function getPacientes() {
      const response = await fetch(`http://localhost:5000/paciente`);

      console.log(response);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const pacientes = await response.json();
      // el.rut === rut
      // el.toString().replace('.','').replace('-','').replace('K','k') === rut.replace('.','').replace('-','').replace('K','k')
      // (el.toString().replace('.','').replace('-','').replace('K','k')).indexOf(rut.replace('.','').replace('-','').replace('K','k')) > -1)
      const filtrados = pacientes.filter((el) => el.rut === rut);
      setPacientes(filtrados);
    }

    getPacientes();

    return;
  }, [pacientes.length]);

  if (pacientes.length === 0) {
    return <div>No se encontraron fichas con ese rut</div>;
  }

  function listaFichas(){
    return pacientes.map((paciente) => {
      return(
        <Paciente
          paciente={paciente}
        />
      );
    });
  }

  return (
    <div>
        <h1>Resultados para {rut}</h1>
      
        <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>rut</th>
           <th>Nombre</th>
           <th>Fecha de atención</th>
         </tr>
       </thead>
       <tbody>{listaFichas()}</tbody>
     </table>
      <Link className="btn btn-link" to="/nuevoFormulario">
        Crear un nuevo formulario
      </Link>
    </div>
  );
}



