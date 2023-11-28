import React, { useEffect } from "react";
import ImagenUsuario from './images/imagen_usuario.png';
import './styles/ProfileStyle.css'
import axios from 'axios';
import { useState } from "react";
import { useAuth} from "../../src/AuthContext";
import { useNavigate } from "react-router";

//import { Margin } from "@mui/icons-material";


export default function Profile( {setLoggedIn}){


    const { userId, logout }  = useAuth();
    const navigate = useNavigate();

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

      const handleLogout = () => {
        // Clear user ID and navigate to the Welcome page
        logout();
        setLoggedIn(false);
        navigate('/');
      };
      

    return(
        <section class="seccion-perfil-usuario">
            <div class="perfil-usuario-header">
                <div class="perfil-usuario-portada">
                    <div class="perfil-usuario-avatar">
                        {datosPerfil.map((item, index) => (
                          <img key={index} src={item.ImagenPerfil} alt="img-avatar" />
                        ))}
                        <button type="button" class="boton-avatar">
                            <i class="far fa-image"></i>
                        </button>
                    </div>
                </div>
            </div>
            {datosPerfil.map((item, index) => (
            <div class="perfil-usuario-body">
                <div class="perfil-usuario-bio">
                    <h3 class="titulo">{item.NickName}</h3>
                </div>
                <div class="perfil-usuario-footer">
                    <ul class="lista-datos">
                        <li><i class="icono fas fa-map-signs"></i> Nombre: {item.Nombre}</li>
                        <li><i class="icono fas fa-phone-alt"></i> Correo: {item.Correo}</li>
                        <li><i class="icono fas fa-briefcase"></i> Sexo: {item.Sexo}</li>
                        {/* <li><i class="icono fas fa-building"></i> IMC: </li> */}
                    </ul>
                    <ul class="lista-datos">
                        <li><i class="icono fas fa-map-marker-alt"></i> Estatura: {item.Estatura}</li>
                        <li><i class="icono fas fa-calendar-alt"></i> Edad: {item.Edad} </li>
                        <li><i class="icono fas fa-user-check"></i> Peso: {item.Peso} </li>
                        <li><i class="icono fas fa-share-alt"></i> IMC: {item.IMC}</li>
                    </ul>
                </div>

                {/* <div class="redes-sociales">
                    <a href="#" class="boton-redes facebook fab fa-facebook-f"><i class="icon-facebook"></i></a>
                    <a href="#" class="boton-redes twitter fab fa-twitter"><i class="icon-twitter"></i></a>
                    <a href="" class="boton-redes instagram fab fa-instagram"><i class="icon-instagram"></i></a>
                </div> */}

                <div class="boton-cerrar-perfil">
                    <button type="button" class="boton-perfil" onClick={handleLogout}>Cerrar Sesión</button>
                </div>
            </div>
            ))}
            <br/>
            <br/>
        </section>
        
    );
}