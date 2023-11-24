import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/barra.css'; // Archivo de estilos para el círculo
import { useAuth } from '../AuthContext';
import axios from 'axios';




const Count = (UserId) => {
  return (
    <div className="d-flex justify-content-center align-items-center circle-container">
      <div className="circle big-circle"></div>
      <div className="circle small-circle">
        <h3 className='text-center text-light mt-custom display-custom'>{UserId.caloriasRegistradas}kcal</h3>
        <h3 className='text-center display-5 text-light'>Calorias</h3>
      </div>
    </div>
  );
};

export default Count;