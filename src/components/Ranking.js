import React, { useState, useEffect } from 'react';
import ImagenUsuario from './images/imagen_usuario.png';
import './styles/RankingStyle.css'
import axios from 'axios';
import { useAuth} from "../../src/AuthContext";

export default function RankingTable() {

const [datosRanking, setDatosRanking] = useState([]);
const { userId }  = useAuth();
// const [datosPerfil, setDatosPerfil] = useState([]);

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

    for ($posicionUsuario = 0; $posicionUsuario < datosRanking.length; $posicionUsuario++) {
        var $usuarioEnRanking = datosRanking[$posicionUsuario];
        // console.log(`Iteración ${$posicionUsuario + 1}: Usuario en el ranking - ID: ${$usuarioEnRanking.id}, NickName: ${$usuarioEnRanking.NickName}`);
        // console.log(`Usuario ID ${userId}`);
        if ($usuarioEnRanking.id == userId) {
            // console.log(`¡Usuario logueado encontrado en el ranking en la posición ${$posicionUsuario + 1}!`);
            break;
        }
    }


  const usuarioLog = datosRanking[$posicionUsuario];

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
                        
                    {usuarioLog ? (
                        <tr className='you'>
                            <td className='position'><strong>{$posicionUsuario + 1}</strong></td>
                            <td><img src={usuarioLog.ImagenPerfil} alt="Imagen de usuario" />Tu</td>
                            <td>{usuarioLog.racha}</td>
                        </tr>
                        ) : (
                        <tr>
                            <td colSpan="3">El usuario no está en el ranking</td>
                        </tr>
                    )}
                        
                        {datosRanking.map((item, index) => (
                            <tr key={index}>
                                <td className='position'><strong>{$posicion += 1}</strong></td>
                                <td><img src={item.ImagenPerfil}/>{item.NickName}</td>
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
