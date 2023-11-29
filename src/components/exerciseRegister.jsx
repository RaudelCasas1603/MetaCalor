import React from "react";
import { useState, useEffect } from "react";
import '../components/styles/ExerciseRegisterStyle.css'
import axios from "axios";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router";


export default function ExerciseRegister(){
    const [datosEjercicios, setDatosEjercicios] = useState([]);
    const { userId }  = useAuth();
    const[caloriasMin, setCaloriasMin]=useState(0.0);
    const[minutos, setMinutos]=useState(0.0);
    const navigate = useNavigate();
    const [selectedExerciseId, setSelectedExerciseId] = useState('');
    const [exerciseData, setExerciseData] = useState({
        nombre: '',
        caloriasMin: 0,
      });
      const [formData, setFormData] = useState({
        caloriasMin: '',
        minutos: 0,
        UserId: '', // Agrega cualquier otro campo que necesites
      });

    useEffect(() => {
        // Llama a la función para obtener datos del ranking al montar el componente
        obtenerDatosEjercicios();
    }, []); // El segundo parámetro indica que esto solo se ejecutará al montar el componente

    const obtenerDatosEjercicios = async () => {
        try {
        // Realiza la solicitud GET al servidor
        const respuesta = await axios.get('https://metacalor-e.000webhostapp.com/getExercises.php');
        // Imprime los datos en la consola para verificar
        console.log(respuesta.data);
        // Actualiza el estado con los datos recibidos
        setDatosEjercicios(respuesta.data);
        } catch (error) {
        console.error('Error al obtener datos del ranking', error);
        }
    };

    // const handleActualizarCaloriasMin = (event) => {
    //     setCaloriasMin(event.target.value);
    // };
    const handleActualizarMinutos = (event) =>{
        setMinutos(event.target.value);
    };


    // const handleInputChange = (e) => {
    //     setFormData({
    //       ...formData,
    //       [e.target.name]: e.target.value,
    //     });
    // };

    const handleSelectExercise = (event) => {
        const selectedExerciseId = event.target.value;
        // Obtener los datos del ejercicio seleccionado según el ID
        const selectedExercise = datosEjercicios.find((exercise) => exercise.id === selectedExerciseId);
      
        // Actualizar el estado con los datos del ejercicio seleccionado
        setExerciseData({
          nombre: selectedExercise.nombre,
          caloriasMin: selectedExercise.caloriasMin,
        });
      };

      
      const handleSubmit=(event)=>{
          event.preventDefault();
              const data = new FormData(event.currentTarget);
              data.append('caloriasMin', caloriasMin);
              data.append('minutos', minutos);
              data.append('UserId', userId);
               console.log({
                 caloriasMin: caloriasMin,
                 minutos: minutos,
                  UserId: userId,
               });
               axios.post('https://metacalor-e.000webhostapp.com/registerExercise.php', data)
                  .then(response => {
                      console.log(response);
                      if (response.data.success) {
                          console.log('Registro exitoso');
                          navigate('/main');
                  } else {
                      console.error('Error al registrar:', response.data.message);
                  }
                  })
                  .then(response => {
                      console.log('Respuesta del servidor:', response);
                  // Resto del código...
                  })
                  .catch(error => {
                      console.error('Error de Axios:', error);
                      if (error.response) {
                          // El servidor respondió con un código de estado diferente de 2xx
                          console.error('Respuesta del servidor:', error.response.data);
                      } else if (error.request) {
                          // La solicitud fue hecha pero no se recibió respuesta
                      console.error('No se recibió respuesta del servidor');
                      } else {
                      console.error('Error al configurar la solicitud');
                      }
                  });
          }

    return(
        <div class="form-body">    
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Ejercicio realizado</h3>
                        <p>Rellena toda la informacion</p>
                        <form class="requires-validation" onSubmit={handleSubmit} novalidate>
                        
                        <div class="col-md-12">
                            <label for="exerciseSelect">Selecciona un ejercicio:</label>
                            <select class="form-control" id="exerciseSelect" onChange={handleSelectExercise} required>
                            <option value="" disabled selected>
                                Selecciona un ejercicio
                            </option>
                            {datosEjercicios.map((exercise) => (
                                <option key={exercise.id} value={exercise.id}>
                                {exercise.nombre}
                                </option>
                            ))}
                            </select>
                        </div>

                        <div class="col-md-12">
                            <label for="caloriasMin">Calorías por minuto:</label>
                            <input
                                class="form-control"
                                type="number"
                                id="caloriasMin"
                                name="caloriasMin"
                                value={exerciseData.caloriasMin}
                                readOnly
                            />
                        </div>

                        <div class="col-md-12">
                            <label for="minutos">Minutos: </label>
                            <input
                            class="form-control"
                            type="number"
                            name="minutos"
                            id = "minutos"
                            placeholder="Minutos"
                            value={minutos}
                            onChange={handleActualizarMinutos}
                            required
                            />
                            <div class="valid-feedback">Minutos field is valid!</div>
                            <div class="invalid-feedback">Minutos field cannot be blank!</div>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                            <label class="form-check-label">Confirmo que los datos son correctos</label>
                            <div class="invalid-feedback">Porfavor confirma que los datos ingresados son correctos!</div>
                        </div>
                            <div class="form-button mt-3">
                                <button id="submit" type="submit" class="btn-register">Register</button>
                            </div>
                            {/* {showAlert && (
                                <div className={`alert ${serverResponse.success ? "alert-success" : "alert-danger"}`} role="alert">
                                {serverResponse.message}
                                </div>
                            )} */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}