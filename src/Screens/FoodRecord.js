import React from "react";
import food from "../components/images/food.png";
import customFood from "../components/images/customFood.png";
import "../components/styles/FoodRecordStyle.css";
export default function FoodRecord(){

    return (

        <div className="container">

            <div className="Text">
                <h1 className="Text__title">
                    Registra tus Alimentos y Porciones
                </h1>
                <hr className="line"/>

                <p className="Text__text">
                    Asegurate de registrar las porciones correctas y los alimentos adecuados si quieres observar
                    los cambios más exactos
                </p>

                <hr className="line"/>

                <h3 className="Text__tips">Consejo</h3>

            </div>

            <div className="Image">
                <div className="Image__customFood">
                    <img className="Image__customFood--img" src={customFood} alt="customFood" />
                    <button className="Image__customFood--text">Utilizar alimentos propios</button>
                </div>
                <div className="VerticalLine"></div> {/* Agregamos un div para la línea vertical */}
                <div>
                    <img className="Image__Food--img" src={food} alt="customFood" />
                    <button className="Image__Food--text">Utilizar Alimentos Base</button>
                </div>
            </div>

            


        </div>

    );

}
