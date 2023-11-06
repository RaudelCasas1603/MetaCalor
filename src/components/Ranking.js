import React, { useState } from 'react';
import ImagenUsuario from './images/imagen_usuario.png';
import './styles/RankingStyle.css'


export default function RankingTable() {
  const [rankingData, setRankingData] = useState([
    { posicion: 1, nombre: "Usuario 1", racha: 100 },
    { posicion: 2, nombre: "Usuario 2", racha: 90 },
    { posicion: 3, nombre: "Usuario 3", racha: 80 },
    { posicion: 4, nombre: "Usuario 4", racha: 70 },
    { posicion: 5, nombre: "Usuario 5", racha: 60 },
    { posicion: 5, nombre: "Usuario 6", racha: 50 },
    { posicion: 5, nombre: "Usuario 7", racha: 40 },
    // Agrega más datos aquí
  ]);

  const usuario = rankingData[2];

  return (
    <body className='body'>
        <main className='table'>
            <section className='table__header'>
                <h1>Ranking</h1>
            </section>
            <section className='table__body'>
                <table>
                    <thead>
                        <tr>
                            <th>Posición</th>
                            <th>Nombre</th>
                            <th>Racha</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={usuario.posicion} className='you'>
                            <td className='position'><strong>{usuario.posicion}</strong></td>
                            <td><img src={ImagenUsuario}/>Tu</td>
                            <td>{usuario.racha}</td>
                        </tr>
                        {rankingData.map((usuario) => (
                            <tr key={usuario.racha}>
                                <td className='position'><strong>{usuario.posicion}</strong></td>
                                <td><img src={ImagenUsuario}/>{usuario.nombre}</td>
                                <td>{usuario.racha}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </main>    
    </body>
  );
}
