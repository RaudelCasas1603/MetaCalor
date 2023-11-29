import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router"
import './styles/FoodAdd.css';

export default function FoodAdd(){
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    proteines: "",
    calories: "",
    carbohydrates: "",
    fats: "",
    quantity: "",         // Nuevo campo
    unit: "",             // Nuevo campo
    gross_weight: "",     // Nuevo campo
    net_weight: "",       // Nuevo campo
  });

  const [serverResponse, setServerResponse] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const queryString = new URLSearchParams(formData).toString();

    try {
      const response = await fetch(`https://metacalor-e.000webhostapp.com/foodAdd.php?${queryString}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data);
      setServerResponse(data);
      setShowAlert(true);
      setFormData({
        name: "",
        proteines: "",
        calories: "",
        carbohydrates: "",
        fats: "",
        quantity: "",
        unit: "",
        gross_weight: "",
        net_weight: "",
      });
      setTimeout(() => {
        navigate("/main"); // Reemplaza '/otra_pagina' con tu ruta deseada
      }, 3000);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      // Puedes manejar el error de la manera que prefieras, por ejemplo, mostrar un mensaje al usuario.
    }
  };
    
      useEffect(() => {
        if (showAlert) {
          const timeout = setTimeout(() => {
            setShowAlert(false);
            setServerResponse(null);
          }, 10000);
      
          return () => clearTimeout(timeout);
        }
      }, [showAlert]);
      
 
    return(
                    <div class="form">
                        <h3>Registra un Nuevo Alimento</h3>
                        <p>Rellena toda la informacion</p>
                        <form class="requires-validation" onSubmit={handleSubmit} novalidate>
                        
                        <div class="col-md-12">
                            <input class="form-control" type="text" name="name" placeholder="Nombre" required onChange={handleInputChange} />
                            <div class="valid-feedback">Name field is valid!</div>
                            <div class="invalid-feedback">Name field cannot be blank!</div>
                        </div>

                        <div class="col-md-12">
                            <input class="form-control" type="text" name="proteines" placeholder="Proteinas" required onChange={handleInputChange} />
                                <div class="valid-feedback">Proteines field is valid!</div>
                                <div class="invalid-feedback">Proteines field cannot be blank!</div>
                        </div>
                        <div class="col-md-12">
                            <input class="form-control" type="text" name="calories" placeholder="Calorias" required onChange={handleInputChange} />
                                <div class="valid-feedback">Calories field is valid!</div>
                                <div class="invalid-feedback">Calories field cannot be blank!</div>
                        </div>
                        <div class="col-md-12">
                            <input class="form-control" type="text" name="carbohydrates" placeholder="Carbohidratos" required onChange={handleInputChange}/>
                                <div class="valid-feedback">Carbohydrates field is valid!</div>
                                <div class="invalid-feedback">Carbohydrates field cannot be blank!</div>
                        </div>
                        <div class="col-md-12">
                            <input class="form-control" type="text" name="fats" placeholder="Grasas" required onChange={handleInputChange} />
                                <div class="valid-feedback">Fats field is valid!</div>
                                <div class="invalid-feedback">Fats field cannot be blank!</div>
                        </div>
                    <div className="col-md-12">
                      <input className="form-control" type="text" name="quantity" placeholder="Cantidad" onChange={handleInputChange} />
                    </div>
                    <div className="col-md-12">
                      <input className="form-control" type="text" name="unit" placeholder="Unidad" onChange={handleInputChange} />
                    </div>
                    <div className="col-md-12">
                      <input className="form-control" type="text" name="gross_weight" placeholder="Peso Bruto (g)" onChange={handleInputChange} />
                    </div>
                    <div className="col-md-12">
                      <input className="form-control" type="text" name="net_weight" placeholder="Peso Neto (g)" onChange={handleInputChange} />
                    </div>
                        <div class="form-button mt-3">
                            <button id="submit" type="submit" class="btn-register">Register</button>
                        </div>
                        {showAlert && (
                            <div className={`alert ${serverResponse.success ? "alert-success" : "alert-danger"}`} role="alert">
                            {serverResponse.message}
                            </div>

                        )}
                    </form>
                </div>
    )    
}