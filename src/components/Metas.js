import React, {useState} from 'react';
import './styles/MetasStyle.css'

export default function Metas(){

    const [metasData] = useState([
        {estado: "completado", descripcion: "meta 1", inicio: "01/01/2021", finalizacion: "01/01/2022"},
        {estado: "completado", descripcion: "meta 2", inicio: "01/01/2021", finalizacion: "01/01/2022"},
        {estado: "completado", descripcion: "meta 3", inicio: "01/01/2021", finalizacion: "01/01/2022"},
        {estado: "completado", descripcion: "meta 4", inicio: "01/01/2021", finalizacion: "01/01/2022"},
        {estado: "completado", descripcion: "meta 5", inicio: "01/01/2021", finalizacion: "01/01/2022"},
        {estado: "completado", descripcion: "meta 6", inicio: "01/01/2021", finalizacion: "01/01/2022"},
        {estado: "completado", descripcion: "meta 7", inicio: "01/01/2021", finalizacion: "01/01/2022"},
    ]);

    return (
        <div>
            <div className="title">
                <h1>Metas</h1>
            </div>
            <div className="button-bar">
                <button>Logo Editar</button>
                <button>Logo Agregar</button>
            </div>
            <div>
                <table className="center-table">
                <thead>
                    <tr>
                    <th>Estado</th>
                    <th>Descripcion</th>
                    <th>Inicio</th>
                    <th>Finalizacion</th>
                    </tr>
                </thead>
                <tbody>
                    {metasData.map((data, index) => (
                    <tr key={index}>
                        <td>{data.estado}</td>
                        <td>{data.descripcion}</td>
                        <td>{data.inicio}</td>
                        <td>{data.finalizacion}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
    );

}