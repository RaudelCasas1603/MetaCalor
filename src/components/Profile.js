import React from "react";
import ImagenUsuario from './images/imagen_usuario.png';
import './styles/ProfileStyle.css'
//import { Margin } from "@mui/icons-material";


export default function Profile(){
    return(
        <section class="seccion-perfil-usuario">
            <div class="perfil-usuario-header">
                <div class="perfil-usuario-portada">
                    <div class="perfil-usuario-avatar">
                        <img src={ImagenUsuario} alt="img-avatar"/>
                        <button type="button" class="boton-avatar">
                            <i class="far fa-image"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="perfil-usuario-body">
                <div class="perfil-usuario-bio">
                    <h3 class="titulo">Username</h3>
                </div>
                <div class="perfil-usuario-footer">
                    <ul class="lista-datos">
                        <li><i class="icono fas fa-map-signs"></i> Nombre:</li>
                        <li><i class="icono fas fa-phone-alt"></i> Correo:</li>
                        <li><i class="icono fas fa-briefcase"></i> Password:</li>
                        {/* <li><i class="icono fas fa-building"></i> IMC: </li> */}
                    </ul>
                    <ul class="lista-datos">
                        <li><i class="icono fas fa-map-marker-alt"></i> Estatura:</li>
                        <li><i class="icono fas fa-calendar-alt"></i> Edad: </li>
                        <li><i class="icono fas fa-user-check"></i> Peso: </li>
                        <li><i class="icono fas fa-share-alt"></i> IMC: </li>
                    </ul>
                </div>
                <div class="redes-sociales">
                    <a href="#" class="boton-redes facebook fab fa-facebook-f"><i class="icon-facebook"></i></a>
                    <a href="#" class="boton-redes twitter fab fa-twitter"><i class="icon-twitter"></i></a>
                    <a href="" class="boton-redes instagram fab fa-instagram"><i class="icon-instagram"></i></a>
                </div>
            </div>
            <br/>
            <br/>
        </section>
        
    );
}