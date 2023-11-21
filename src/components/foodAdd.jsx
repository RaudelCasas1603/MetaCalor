import React, { useState, useEffect} from "react";
import './styles/FoodAdd.css';

export default function FoodAdd(){

    const [formData, setFormData] = useState({
        name: "",
        calories: "",
        carbohydrates: "",
        fats: "",
        category: "",
      });

      const [serverResponse, setServerResponse] = useState(null);
      const [showAlert, setShowAlert] = useState(false);
    
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleCategoryChange = (category) => {
        setFormData({
            ...formData,
            category: category,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const queryString = new URLSearchParams(formData).toString();
    
        fetch(`https://metacalor-e.000webhostapp.com/foodAdd.php?${queryString}`, {
          method: "GET",
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setServerResponse(data);
            setShowAlert(true);
            setFormData({
              name: "",
              calories: "",
              carbohydrates: "",
              fats: "",
              category: "",
            });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
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
        <div class="form-body">    
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Registra un Nuevo Alimento</h3>
                        <p>Rellena toda la informacion</p>
                        <form class="requires-validation" onSubmit={handleSubmit} novalidate>
                        
                        <div class="col-md-12">
                            <input class="form-control" type="text" name="name" placeholder="Nombre" required onChange={handleInputChange} />
                            <div class="valid-feedback">Name field is valid!</div>
                            <div class="invalid-feedback">Name field cannot be blank!</div>
                        </div>

                        <div class="col-md-12">
                            <input class="form-control" type="text" name="calories" placeholder="Proteinas" required onChange={handleInputChange} />
                                <div class="valid-feedback">Proteines field is valid!</div>
                                <div class="invalid-feedback">Proteines field cannot be blank!</div>
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

                        <div class="col-md-12 mt-3">
                            <label class="mb-3 mr-1" for="category">Categoria: </label>

                            <input type="radio" class="btn-check" name="category" id="protein" onClick={() => handleCategoryChange('Proteinas')} />
                            <label class="btn btn-sm btn-outline-secondary" for="protein">Proteinas</label>

                            <input type="radio" class="btn-check" name="category" id="grain" onClick={() => handleCategoryChange('Granos')} />
                            <label class="btn btn-sm btn-outline-secondary" for="grain">Granos</label>


                            <input type="radio" class="btn-check" name="category" id="vegetables" autocomplete="off" onClick={() => handleCategoryChange('Vegetales')} />
                            <label class="btn btn-sm btn-outline-secondary" for="vegetables">Vegetales</label>

                            <input type="radio" class="btn-check" name="category" id="fruits" autocomplete="off" onClick={() => handleCategoryChange('Frutas')}/>
                            <label class="btn btn-sm btn-outline-secondary" for="fruits">Frutas</label>

                            <input type="radio" class="btn-check" name="category" id="dairy" autocomplete="off" onClick={() => handleCategoryChange('Lacteos')}/>
                            <label class="btn btn-sm btn-outline-secondary" for="dairy">Lacteos</label>

                            <div class="valid-feedback mv-up">You selected a category!</div>
                            <div class="invalid-feedback mv-up">Please select a category!</div>
                        </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label class="form-check-label">Confirmo que los datos son correctos</label>
                        <div class="invalid-feedback">Porfavor confirma que los datos ingresados son correctos!</div>
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
            </div>
        </div>
    
    </div>
 
    )    
}