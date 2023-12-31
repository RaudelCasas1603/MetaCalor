import { useEffect, useState, useRef } from 'react';
import { useAuth } from '../AuthContext';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/barra.css'; // Archivo de estilos para el círculo

const Count = () => {
  // const { userId }  = useAuth();

  // const [datosPerfil, setDatosPerfil] = useState([]);

  // useEffect(() => {
  //   console.log("Fetching data for user ID: " + userId);
  //   obtenerDatosPerfil();
  // }, [userId]); // El segundo parámetro indica que esto solo se ejecutará al montar el componente

  // const obtenerDatosPerfil = async () => {
  //   try {
  //     console.log("Fetching data for user ID: " + userId);
  //     const respuesta = await axios.get('https://metacalor-e.000webhostapp.com/loadInfo.php?id=' + userId);
  //     console.log("Response data:", respuesta.data);
  //     setDatosPerfil(respuesta.data);
  //   } catch (error) {
  //     console.error('Error fetching profile data', error);
  //   }
  // };

  // // Verificar si datosPerfil está vacío y asignar valores predeterminados
  // const perfilData = datosPerfil.length > 0 ? datosPerfil[0] : {
  //   caloriasRegistradas: 0,
  //   // Agrega más campos con sus valores predeterminados si es necesario
  // };
  const { userId } = useAuth();
  const [datosPerfil, setDatosPerfil] = useState([]);
  const [datosPerfilNoActuales, setDatosNoActuales] = useState([]);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);  

  const contenedorRef = useRef(null);

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


  // Verificar si datosPerfil está vacío y asignar valores predeterminados
  const perfilData = datosPerfil.length > 0 ? datosPerfil[0] : {
    caloriasRegistradas: 0,
    carbohidratosRegistrados: 0,
    grasasRegistradas: 0,
    proteinasRegistradas: 0,
    // Agrega más campos con sus valores predeterminados si es necesario
  };
  useEffect(() => {
    // Esta función se ejecuta cuando el componente se monta
    if (datosPerfil.length >0) {
      const caloriasActuales = datosPerfil[0].caloriasRegistradas;
      if (caloriasActuales > 500) {
        setMostrarAlerta(true);
      }
    }
  }, [datosPerfil]); // Se ejecuta cuando datosPerfil o datosNoActuales cambian
  return (
    <div className=" justify-content-center align-items-center circle-container">
      <div className="circle big-circle"></div>
      <div className="circle small-circle">
        <h3 className='text-center text-light mt-custom display-custom'>{perfilData.caloriasRegistradas}kcal</h3>
        <h4 className='text-center display-5 text-light'>Calorias</h4>
      </div>
    </div>
  );
};

export default Count;
