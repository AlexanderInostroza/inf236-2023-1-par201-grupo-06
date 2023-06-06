import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
import Buscar from './buscar';

// Here, we display our Navbar
export default function Navbar() {


  function buscarPaciente(rut) {
    //e.preventDefault();
    // Aquí puedes realizar la lógica para buscar el paciente en MongoDB
    // utilizando el valor de 'rut' en el estado
    console.log("Buscar paciente con RUT:", rut);
  }

  
  
  return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 15 + '%'}} src="https://www.buin.cl/wp-content/uploads/2020/05/Mesa-de-trabajo-2-copia-3@3x.png"></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="/nuevoFormulario">
              Ingresar nuevo paciente
             </NavLink>
           </li>
           <li className="nav-item">
           <NavLink className="nav-link" to="/create">
              Create record
              </NavLink>
           </li>
           <li className="nav-item">
            
             <NavLink className="nav-link" to="/visualizar">
              Buscar paciente
             </NavLink>
           
           </li>
         </ul>
         <form class="form-inline my-2 my-lg-0" onSubmit="{Visualizar}">
            <ul className="navbar-nav ml-auto">
              <input class="form-control mr-sm-2" type="text" name="q" placeholder="RUT paciente"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </ul> 
          </form>
     <Buscar />
       </div>
     </nav>
   </div>
 );
}