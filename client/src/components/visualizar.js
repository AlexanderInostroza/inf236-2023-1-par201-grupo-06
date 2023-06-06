import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";


const Ficha = (props) => (
  <tr>
    <td>{props.paciente.fecha}</td>
    <td>
      <Link className="btn btn-link" to="/create"> ver </Link>
    </td>
  </tr>
);

export default function Visualizar(){
  const [pacientes, setPacientes] = useState([]);

  const urlParams = new URLSearchParams(window.location.search);
  const rut = urlParams.get('q');

  useEffect(() =>{
    async function getPacientes() {
      const response = await fetch('http://localhost:5000/paciente/${rut}');
      console.log(response);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const pacientes = await response.json();
      setPacientes(pacientes);

    }

    getPacientes();

    return;
  }, [pacientes.length]);


}


