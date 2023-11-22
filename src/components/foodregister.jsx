import React, {Component, useEffect, useState} from "react"
import axios from "axios";
import proteinas from "./images/proteina.png"
import granos from './images/granos.png'
import vegetales from './images/vegetales.png'
import frutas from './images/frutas.png'
import lacteos from './images/lacteos.png'
import grasasSin from './images/grasasSin.png'

import './styles/registroAlimentoStyle.css'


export default function FoodRegister(){
const[alimentos, setAlimentos]=useState([]);
const[alimentosFiltrados, setFiltrados]=useState([]);
const[categoriaActual, setCatActual]=useState('Todas');
useEffect(()=>{ //HACE LA CONSULTA DE TODOS LOS ALIMENTOS DE LA BASE DE DATOS
    fetch('https://metacalor-e.000webhostapp.com/alimentos.php')
    .then(response => response.json())
    .then(data => {
        setAlimentos(data)
        setFiltrados(data)
    })
    .catch(error => console.error('Error al obtener datos:', error));
}, []);
useEffect(()=>{  //FILTRA LOS ALIMENTOS SEGÚN LA CATEGORÍA SELECCIONADA
    if(categoriaActual==='Todas'){
        setFiltrados(alimentos);
    }else{
        const alimentosFiltrados=alimentos.filter(item=>item.categoria === categoriaActual);
        setFiltrados(alimentosFiltrados);
    }
}, [categoriaActual, alimentos]);
const cateUnicas={
    Frutas: frutas,
    Verduras: vegetales,
    Leguminosas: granos,
    "Grasas con proteínas": proteinas,
    "Grasas sin proteínas": grasasSin,
    "Leche entera": lacteos,
    "Leche descremada": lacteos,
};
    return(
        <section className="RegisterFood-container">
            {/* Seccion de seleccion de categoria */}
            <div className="RegisterFood-categories">
                <div className="RegisterFood-categories-header">
                    <h1>Categorias</h1>    
                </div>
                <div className="RegisterFood-categories-body">
                    {Object.keys(cateUnicas).map((categoria, index)=>(
                        <button key={index} onClick={()=>setCatActual(categoria)} style={{
                            background: `url(${cateUnicas[categoria]})`,
                            backgroundSize: 'cover',
                            padding: '25px',
                            margin: '10px',
                            cursor: 'pointer',
                         }}></button>
                         
                    ))}
                </div>
            </div>
            <div className="RegisterFood-foodtable">
                <section className='RegisterFood-foodtable-header'>
                    <h1>Tus alimentos</h1>
                </section>
                <section className='RegisterFood-foodtable-body'>
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Proteinas</th>
                                <th>Grasas</th>
                                <th>Carbohidratos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A</td>
                                <td>B</td>
                                <td>C</td>
                                <td>D</td>
                            </tr>
                            <tr>
                                <td>A</td>
                                <td>B</td>
                                <td>C</td>
                                <td>D</td>
                            </tr>
                            <tr>
                                <td>A</td>
                                <td>B</td>
                                <td>C</td>
                                <td>D</td>
                            </tr>
                            {/* <tr key={} className='you'>
                                <td className='position'><strong>{}</strong></td>
                                <td><img src={}/>Tu</td>
                                <td>{}</td>
                            </tr>
                            {rankingData.map(() => (
                                <tr key={}>
                                    <td className='position'><strong>{}</strong></td>
                                    <td><img src={}/>{}</td>
                                    <td>{}</td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </section>
            </div>
            <div className="RegisterFood-foodlist">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <h4>Lista Alimentos</h4>
                                <p style={{margin:'0px', padding: '0px'}}>{categoriaActual}</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {alimentosFiltrados.map((item, index)=>(
                            <tr key={index}>
                                <td>{item.Alimento}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="RegisterFood-send">
                <input id="Porciones" type="number" className="RegisterFood-send-porciones" placeholder="Porciones:"></input>    
                <button type="submit" className="RegisterFood-send-submit">Registrar</button>
            </div>

        </section>
    )
}