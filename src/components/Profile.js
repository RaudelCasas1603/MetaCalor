import React, { useEffect, useState } from "react";
import ImagenUsuario from "./images/imagen_usuario.png";
import "./styles/ProfileStyle.css";
import axios from "axios";
import { useAuth } from "../../src/AuthContext";
import { useNavigate } from "react-router";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//import { Margin } from "@mui/icons-material";

export default function Profile({ setLoggedIn }) {
  const { userId, logout } = useAuth();
  const navigate = useNavigate();

  const [datosPerfil, setDatosPerfil] = useState([]);
  const [file, setFile] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("Fetching data for user ID:", userId);
    obtenerDatosPerfil();
  }, [userId]); // The second parameter indicates that this will only run when the component mounts

  const obtenerDatosPerfil = async () => {
    try {
      console.log("Fetching data for user ID:", userId);
      const respuesta = await axios.get(
        "https://metacalor-e.000webhostapp.com/loadInfo.php?id=" + userId
      );
      console.log("Response data:", respuesta.data);
      setDatosPerfil(respuesta.data);
    } catch (error) {
      console.error("Error fetching profile data", error);
    }
  };

  const handleLogout = () => {
    // Clear user ID and navigate to the Welcome page
    logout();
    setLoggedIn(false);
    navigate("/");
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleImageUploaded = async () => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "https://metacalor-e.000webhostapp.com/updateProfilePic.php",
        formData
      );
      console.log("Response data:", response.data);
      if (response.data.success) {
        alert("Imagen de perfil actualizada con éxito!");
        obtenerDatosPerfil(); // Refresh profile data after uploading the image
        setShow(false); // Close the modal
      } else {
        alert("Error al actualizar la imagen de perfil");
      }
    } catch (error) {
      console.error("Error uploading profile image", error);
    }
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <section className="seccion-perfil-usuario">
      <div className="perfil-usuario-header">
        <div className="perfil-usuario-portada">
          <div className="perfil-usuario-avatar">
            {datosPerfil.map((item, index) => (
              <img key={index} src={item.ImagenPerfil} alt="img-avatar" />
            ))}
            <button type="button" className="boton-avatar" onClick={handleShow}>
              <i className="far fa-image"></i>
            </button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Subir imagen de perfil</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input type="file" name="image" onChange={handleFileChange} />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleImageUploaded}>
                  Subir
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
              </Modal.Footer>
            </Modal>
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