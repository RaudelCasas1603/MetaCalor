import React from "react";
import Count from "../components/count.jsx";
import Bottoms from "../components/bottoms.jsx";
import RankingBottom from "../components/rankingBottom.jsx";
import '../components/styles/main.css';
import imagen1 from '../components/images/carbo.png';
import imagen2 from '../components/images/grasas.png';
import imagen3 from '../components/images/prote.png';
import { useState } from "react";
export default function Main({UserId}) {
    const [UserIdLocal, setUserId]=useState(UserId);
    return(
        <>
            <div className="container" style={{ marginTop: '100px', marginBottom: '100px' }}>
                <img src={imagen1} alt="Imagen" class="position-absolute posicion-carbo" width={'95px'}/>
                <h5 className="macro-1 position-absolute">Carbohidratos</h5>
                <img src={imagen2} alt="Imagen" class="position-absolute posicion-grasa" width={'100px'}/>
                <h5 className="macro-2 position-absolute">Grasas</h5>
                <img src={imagen3} alt="Imagen" class="position-absolute posicion-prote" width={'115px'}/>
                <h5 className="macro-3 position-absolute">Proteínas</h5>
                <Count UserId={UserIdLocal}/>
                <h5 className="rankingBottom position-absolute">Ranking</h5>
                <RankingBottom/>
                <Bottoms/>
            </div>
        </>
    )
}