import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import '../components/styles/RankingBottom.css'

const RankingBottom =()=>{
    const [datosRanking, setDatosRanking] = useState([]);
    var $posicion = 0;

    useEffect(() => {
        // Llama a la función para obtener datos del ranking al montar el componente
        obtenerDatosRanking();
      }, []);

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
    
    return(
        <div className="barraRanking">
            <ul className="barraRanking-contenido">
                {datosRanking.map((item, index) => (
                    <li key={index}>
                        {/* <p className='position'><strong>{$posicion += 1}</strong></p> */}
                        <img className='ranking-img' src={item.ImagenPerfil} alt={item.NickName} title={`Posición: ${$posicion += 1}\nNickName: ${item.NickName}\nRacha: ${item.racha}`} />
                        
                        {/* <img className='ranking-img' src={item.ImagenPerfil}/> */}
                        {/* {item.NickName} */}
                    </li>
                ))}
            </ul>
            
                
            
            
            {/*Aquí irian las imagenes de los usuarios que conforman los primeros lugares del ranking */}
        </div>
    );
}
export default RankingBottom;