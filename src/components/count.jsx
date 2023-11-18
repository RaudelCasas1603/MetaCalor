import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/barra.css'; // Archivo de estilos para el círculo

const Count = () => {
  return (
    <div className="d-flex justify-content-center align-items-center circle-container">
      <div className="circle big-circle"></div>
      <div className="circle small-circle">
        <h1 className='text-center text-light mt-custom display-custom'>100</h1>
        <h3 className='text-center display-5 text-light'>Calorias</h3>
      </div>
    </div>
  );
};

export default Count;