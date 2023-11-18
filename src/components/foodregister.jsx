import React from "react"
import proteinas from "./images/proteina.png"
import granos from './images/granos.png'
import vegetales from './images/vegetales.png'
import frutas from './images/frutas.png'
import lacteos from './images/lacteos.png'
import './styles/registroAlimentoStyle.css'

export default function FoodRegister(){
    return(
        <section className="RegisterFood-container">
            {/* Seccion de seleccion de categoria */}
            <div className="RegisterFood-categories">
                <div className="RegisterFood-categories-header">
                    <h1>Categorias</h1>    
                </div>
                <div className="RegisterFood-categories-body">
                    <img src={proteinas} style={{width:80, height:80}}/>
                    <div className="VerticalLine"></div> {/* Agregamos un div para la línea vertical */}
                    <img src={granos} style={{width:80, height:80}}/>
                    <div className="VerticalLine"></div> {/* Agregamos un div para la línea vertical */}
                    <img src={vegetales} style={{width:80, height:80}}/>
                    <div className="VerticalLine"></div> {/* Agregamos un div para la línea vertical */}
                    <img src={frutas} style={{width:80, height:80}}/>
                    <div className="VerticalLine"></div> {/* Agregamos un div para la línea vertical */}
                    <img src={lacteos} style={{width:80, height:80}}/>
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
                <section className='RegisterFood-foodlist-body'>
                    <table>
                        <thead>
                            <tr>
                                <th>Lista Alimentos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A</td>
                            </tr>
                            <tr>
                                <td>B</td>
                            </tr>
                            <tr>
                                <td>C</td>
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
            <div className="RegisterFood-send">
                <input id="Porciones" type="number" className="RegisterFood-send-porciones" placeholder="Porciones:"></input>    
                <button type="submit" className="RegisterFood-send-submit">Registrar</button>
            </div>

        </section>
    )
}