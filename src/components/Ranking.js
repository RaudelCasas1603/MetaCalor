import React, { useState, useEffect } from 'react';
import ImagenUsuario from './images/imagen_usuario.png';
import './styles/RankingStyle.css'
import axios from 'axios';

export default function RankingTable() {

const [datosRanking, setDatosRanking] = useState([]);

useEffect(() => {
    // Llama a la función para obtener datos del ranking al montar el componente
    obtenerDatosRanking();
  }, []); // El segundo parámetro indica que esto solo se ejecutará al montar el componente

  const obtenerDatosRanking = async () => {
    try {
      // Realiza la solicitud GET al servidor
      const respuesta = await axios.get('https://metacalor-e.000webhostapp.com/ranking.php');
      // Imprime los datos en la consola para verificar
      console.log(respuesta.data);
      // Actualiza el estado con los datos recibidos
      setDatosRanking(respuesta.data);
    } catch (error) {
      console.error('Error al obtener datos del ranking', error);
    }
  };

  var $posicion = 0, $posicionUsuario;

//Apartado para poder obtener la posicion del usuario
//   for($posicionUsuario = 0; $posicionUsuario < datosRanking.length; $posicionUsuario++){
//     const item = datosRanking[$posicionUsuario];
//     const esUsuarioLog = userId ==item.id;
//     const claseDestacada = esUsuarioLog ? 'usuario-log': '';
//   }
  

  return (
    <body className='body'>
        <main className='table'>
            <section className='table__header'>
                <h1>Ranking</h1>
            </section>
            <section className='table__body'>
                <table className='table-ranking' style={{width:'100%'}}>
                    <thead>
                        <tr>
                            <th>Posición</th>
                            <th>Nombre</th>
                            <th>Racha</th>
                        </tr>
                    </thead>
                    <tbody>
                    {/* Mostrar la posicion del usuario */}
                        {/* <tr key={i} className={claseDestacada}>
                            <td className='position'><strong>{i + 1}</strong></td>
                            <td><img src={ImagenUsuario} alt="Imagen de usuario" />Tu</td>
                            <td>{item.racha}</td>
                        </tr> */}

                        {datosRanking.map((item, index) => (
                            <tr key={index}>
                                <td className='position'><strong>{$posicion += 1}</strong></td>
                                <td><img src={ImagenUsuario}/>{item.NickName}</td>
                                <td>{item.racha}</td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </section>
        </main>    
    </body>
  );
}
