import React, {useState, useEffect} from "react";
import axios from "axios";
import { useAuth } from "../AuthContext.js";
import Count from "../components/count.jsx";
import Bottoms from "../components/bottoms.jsx";
import RankingBottom from "../components/rankingBottom.jsx";
import '../components/styles/main.css';
import imagen1 from '../components/images/carbo.png';
import imagen2 from '../components/images/grasas.png';
import imagen3 from '../components/images/prote.png';
export default function Main({UserId}) {
    const { userId }  = useAuth();

    const [datosPerfil, setDatosPerfil] = useState([]);
    useEffect(() => {
        console.log("Fetching data for user ID: " + userId);
        obtenerDatosPerfil();
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

      
    return(
        <>
         {datosPerfil.map((item, index) => ( 
            <div className="container">
                <h5 className="nutrientes position-absolute">Registro semanal</h5>
                <img src={imagen1} alt="Imagen" class="position-absolute posicion-carbo" width={'95px'}/>
                <h5 className="macro-1 position-absolute">Carbohidratos</h5>
                <div className="line3"></div><p className="carboCounter">{item.carbohidratos} g</p>
                <img src={imagen2} alt="Imagen" class="position-absolute posicion-grasa" width={'100px'}/>
                <h5 className="macro-2 position-absolute">Grasas</h5>
                <div className="line1"></div><p className="grasasCounter">{item.grasas} g</p>
                <img src={imagen3} alt="Imagen" class="position-absolute posicion-prote" width={'115px'}/>
                <h5 className="macro-3 position-absolute">Proteínas</h5>
                <div className="line2"></div><p className="proteCounter">{item.proteinasRegistradas} g</p>
                <Count/>
                <h5 className="kcalMant position-absolute">Calorías Mantenibles</h5>
                <div className="line4"></div><p className="kcalManteniblesCounter">{item.caloriasMantenibles}</p>
                <h5 className="rankingBottom position-absolute">Ranking</h5>
                <RankingBottom/>
                <Bottoms/>
            </div>
            ))}
        </>
    )
}