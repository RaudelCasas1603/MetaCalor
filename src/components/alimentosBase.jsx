import React from "react"
import proteinas from "./images/proteina.png"
import granos from './images/granos.png'
import vegetales from './images/vegetales.png'
import frutas from './images/frutas.png'
import lacteos from './images/lacteos.png'
import './styles/registroAlimentoBaseStyle.css'

export default function ALimentosBase(){
    return(
        <section className="RegisterFood-base-container">
            {/* Seccion de seleccion de categoria */}
            <div className="RegisterFood-base-categories">
                <div className="RegisterFood-base-categories-header">
                    <h1>Categorias</h1>    
                </div>
                <div className="RegisterFood-base-categories-body">
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
            <div className="RegisterFood-base-foodtable">
                <section className='RegisterFood-base-foodtable-header'>
                    <h1>Ranking</h1>
                </section>
                <section className='RegisterFood-base-foodtable-body'>
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

            <div className="RegisterFood-base-send">

            </div>

        </section>
    )
}