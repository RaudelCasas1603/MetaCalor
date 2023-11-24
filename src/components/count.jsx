import { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/barra.css'; // Archivo de estilos para el círculo

const Count = () => {
  const { userId }  = useAuth();

    const [datosPerfil, setDatosPerfil] = useState([]);
    useEffect(() => {
        console.log("Fetching data for user ID: " + userId);
        obtenerDatosPerfil();
      }, [userId]); // El segundo parámetro indica que esto solo se ejecutará al montar el componente

      const obtenerDatosPerfil = async () => {
        try {
          console.log("Fetching data for user ID: " + userId);
          const respuesta = await axios.get('https://metacalor-e.000webhostapp.com/loadInfo.php?id=' + userId);
          console.log("Response data:", respuesta.data);
          setDatosPerfil(respuesta.data);
        } catch (error) {
          console.error('Error fetching profile data', error);
        }
      };
  return (
    <div className="d-flex justify-content-center align-items-center circle-container">
      <div className="circle big-circle"></div>
      {datosPerfil.map((item, index) => (
      <div className="circle small-circle">
        <h3 className='text-center text-light mt-custom display-custom'>{item.caloriasRegistradas}kcal</h3>
        <h3 className='text-center display-5 text-light'>Calorias</h3>
      </div>
         ))}
    </div>
  );
};

export default Count;