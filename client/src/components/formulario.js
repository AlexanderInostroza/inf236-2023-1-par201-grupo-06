import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Formulario = () => {
  const [rut, setRut] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setRut(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //window.history.pushState(null, '', `/visualizar/${rut}`);
    window.location.href = `/visualizar/${rut}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={rut} onChange={handleInputChange} />
      <button type="submit">Buscar Paciente</button>
    </form>
  );
};

export default Formulario;
