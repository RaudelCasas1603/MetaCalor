import React, { useState, useEffect, useRef} from "react";
import axios from "axios";
import { useAuth } from "../AuthContext.js";
import Count from "../components/count.jsx";
import Bottoms from "../components/bottoms.jsx";
import RankingBottom from "../components/rankingBottom.jsx";
import '../components/styles/main.css';
import imagen1 from '../components/images/carbo.png';
import imagen2 from '../components/images/grasas.png';
import imagen3 from '../components/images/prote.png';
import imagenAdvertencia from '../components/images/advertenciaIcon.png'

const Main = () => {
  const { userId } = useAuth();
  const [datosPerfil, setDatosPerfil] = useState([]);
  const [datosPerfilNoActuales, setDatosNoActuales] = useState([]);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [ranking, setDatosRanking] = useState([]);

  const contenedorRef = useRef(null);

  useEffect(() => {
    console.log("Fetching data for user ID: " + userId);
    obtenerDatosPerfil();
    obtenerDatosRanking();
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

  const obtenerDatosRanking = async () => {
    try {
      // Realiza la solicitud GET al servidor
      const respuesta = await axios.get('https://metacalor-e.000webhostapp.com/rankingTop5.php');
      // Imprime los datos en la consola para verificar
      console.log(respuesta.data);
      // Actualiza el estado con los datos recibidos
      setDatosRanking(respuesta.data);
    } catch (error) {
      console.error('Error al obtener datos del ranking', error);
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
   const cerrarAlerta = () =>{
      setMostrarAlerta(false);
   } 
  return (
    <>
      <div className="container">
        <h5 className="nutrientes position-absolute">Registro semanal</h5>
        <img src={imagen1} alt="Imagen" className="position-absolute posicion-carbo" width={'95px'} />
        <h5 className="macro-1 position-absolute">Carbohidratos</h5>
        <div className="line3"></div><p className="carboCounter">{perfilData.carbohidratos} g</p>
        <img src={imagen2} alt="Imagen" className="position-absolute posicion-grasa" width={'100px'} />
        <h5 className="macro-2 position-absolute">Grasas</h5>
        <div className="line1"></div><p className="grasasCounter">{perfilData.grasas} g</p>
        <img src={imagen3} alt="Imagen" className="position-absolute posicion-prote" width={'115px'} />
        <h5 className="macro-3 position-absolute">Proteínas</h5>
        <div className="line2"></div><p className="proteCounter">{perfilData.proteinasRegistradas}g</p>
        <Count />
        <h5 className="kcalMant position-absolute">Mantenibles</h5>
        <h5 className="rankingBottom position-absolute">Ranking</h5>
        <RankingBottom />
        <Bottoms />
        {mostrarAlerta &&(
          <div className="contenedorAdvertencia" onClick={cerrarAlerta}>
            <div className={`advertencia ${mostrarAlerta ? 'mostrar' : ''}`}>
              <img className="iconAdvert" src={imagenAdvertencia}></img><h3>¡ADVERTENCIA!</h3>
              <div className="consejo">
                <div className="line5"></div>
                <h5>PRESTA ATENCIÓN A LO QUE CONSUMES, TU CONSUMO DE CALORÍAS ES EXCESIVO</h5>
              </div>
            </div>
            <h3 className="aviso">Da click en cualquier lugar de la pantalla.</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
