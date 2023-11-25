import React, {useEffect, useState} from "react"
import { useNavigate } from "react-router"
import axios from "axios"
import FormControl from '@mui/material/FormControl';
import { Input, InputLabel, Button } from "@mui/material"
import proteinas from "./images/proteina.png"
import granos from './images/granos.png'
import vegetales from './images/vegetales.png'
import frutas from './images/frutas.png'
import lacteos from './images/lacteos.png'
import grasasSin from './images/grasasSin.png'
import './styles/registroAlimentoStyle.css'

export default function FoodRegister(UserId){
const[caloriasRegistradas, setCaloriasRegistradas]=useState(0.0);
const[proteinasRegistradas, setProteRegistradas]=useState(0.0);
const[grasas, setGrasasRegistradas]=useState(0.0);
const[sumaCalorias, setSumaCalorias]=useState(0.0);
const[sumaProteinas, setSumaProteinas]=useState(0.0);
const[sumaGrasas, setSumaGrasas]=useState(0.0);
const[alimentos, setAlimentos]=useState([]);
const[alimentosFiltrados, setFiltrados]=useState([]);
const[categoriaActual, setCatActual]=useState('Todas');
const[miAlimento, setMiAlimento]=useState([]);

useEffect(()=>{ //HACE LA CONSULTA DE TODOS LOS ALIMENTOS DE LA BASE DE DATOS
    fetch('https://metacalor-e.000webhostapp.com/alimentos.php')
    .then(response => response.json())
    .then(data => {
        setAlimentos(data)
        setFiltrados(data)
    })
    .catch(error => console.error('Error al obtener datos:', error));
}, []);
useEffect(()=>{  //FILTRA LOS ALIMENTOS SEGÚN LA CATEGORÍA SELECCIONADA
    if(categoriaActual==='Todas'){
        setFiltrados(alimentos);
    }else{
        const alimentosFiltrados=alimentos.filter(item=>item.categoria === categoriaActual);
        setFiltrados(alimentosFiltrados);
    }
}, [categoriaActual, alimentos]);
const cateUnicas={
    Frutas: frutas,
    Verduras: vegetales,
    Leguminosas: granos,
    "Grasas con proteínas": proteinas,
    "Grasas sin proteínas": grasasSin,
    "Leche entera": lacteos,
    "Leche descremada": lacteos,
};
const handleComidaClick= (item)=>{
    const comidaSelec= miAlimento.some((miAlimento)=>miAlimento.id === item.id);
    if(comidaSelec){
        const actualizarComida = miAlimento.filter((miAlimento)=>miAlimento.id!== item.id);
        setMiAlimento(actualizarComida);
        actualizarMacroNutrientes(item, comidaSelec);
    }else{
        setMiAlimento([...miAlimento, item]);
        actualizarMacroNutrientes(item)
    }
};
const actualizarMacroNutrientes = (miAlimento, NoEstaEnLaLista)=>{
    if(NoEstaEnLaLista){
        setSumaCalorias((prev) => Math.max(prev - Number(miAlimento.Energia_kcal), 0));
        setSumaProteinas((prev) => Math.max(prev - Number(miAlimento.Proteina_g), 0));
        setSumaGrasas((prev) => Math.max(prev - Number(miAlimento.Lipidos_g), 0));
    }else{
        setSumaCalorias(sumaCalorias + Number(miAlimento.Energia_kcal));
        setSumaProteinas(sumaProteinas + Number(miAlimento.Proteina_g));
        setSumaGrasas(sumaGrasas + Number(miAlimento.Lipidos_g));
    }
}
const handleActualizarCalorias = (event) => {
    setCaloriasRegistradas(event.target.value);
  };

const handleActualizarProte = (event) => {
    setProteRegistradas(event.target.value);
  };
const handleActualizarGrasas = (event) => {
    setGrasasRegistradas(event.target.value);
  };
const navigate=useNavigate();
const handleSubmit=(event)=>{
    event.preventDefault();
        const data = new FormData(event.currentTarget);
        data.append('caloriasRegistradas', sumaCalorias);
        data.append('proteinasRegistradas', sumaProteinas);
        data.append('grasas', sumaGrasas);
        data.append('UserId', (UserId.UserId));
         console.log({
           proteinasRegistradas: sumaProteinas,
           caloriasRegistradas: sumaCalorias,
           grasas: sumaGrasas,
         });
         axios.post('https://metacalor-e.000webhostapp.com/Access/registrarCalorias.php', data)
            .then(response => {
                console.log(response);
                if (response.data.success) {
                    console.log('Registro exitoso');
                if (response.data.redirect) {
                    navigate('/main');
                }
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
        <section className="RegisterFood-container">
            {/* SECCION DE CATEGORIAS */}
            <div className="RegisterFood-categories">
                <div className="RegisterFood-categories-header">
                    <h1>Categorias</h1>     
                </div>
                <div className="RegisterFood-categories-body">
                    {Object.keys(cateUnicas).map((categoria, index)=>(
                        <button key={index} onClick={()=>setCatActual(categoria)} style={{
                            background: `url(${cateUnicas[categoria]})`,
                            backgroundSize: 'cover',
                            padding: '25px',
                            margin: '10px',
                            cursor: 'pointer',
                         }}></button>
                    ))}
                </div>
            </div>
             {/* SECCION DE LISTA DE ALIMENTOS*/}
             <div className="RegisterFood-foodlist">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <h4>Lista Alimentos</h4>
                                <p style={{margin:'0px', padding: '0px'}}>{categoriaActual}</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {alimentosFiltrados.map((item, index)=>(
                            <tr key={index} onClick={()=>handleComidaClick(item)}>
                                <td>{item.Alimento}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* SECCION DE ALIMENTOS SELECCIONADOS*/}
            <div className="RegisterFood-foodtable">
                <section className='RegisterFood-foodtable-header'>
                    <h1>Tus alimentos</h1>
                </section>
                <section className='RegisterFood-foodtable-body'>
                    <table className="myFoodTable">
                        <thead className="foodtableHead">
                            <tr>
                                <th>Producto</th>
                                <th>Calorías</th>
                                <th>Grasas</th>
                                <th>Proteínas</th>
                            </tr>
                        </thead>
                        <tbody>
                            {miAlimento.map((food)=>(
                                <tr key={food.id}>
                                    <td>{food.Alimento}</td>
                                    <td>{food.Energia_kcal}</td>
                                    <td>{food.Lipidos_g}</td>
                                    <td>{food.Proteina_g}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </div>
            <div className="FormRegister">
                <form onSubmit={handleSubmit} style={{ justifyContent:'center' }}>
                <FormControl required>
                    <InputLabel htmlFor="caloriasRegistradas">Total Calorias</InputLabel>
                    <Input
                        id="caloriasRegistradas"
                        name="caloriasRegistradas"
                        type="number"
                        value={sumaCalorias}
                        onChange={handleActualizarCalorias}
                    ></Input>
                </FormControl>
                <FormControl required>
                    <InputLabel htmlFor="proteinasRegistradas">Total Proteinas</InputLabel>
                    <Input
                        id="proteinasRegistradas"
                        name="proteinasRegistradas"
                        type="number"
                        value={sumaProteinas}
                        onChange={handleActualizarProte}
                    ></Input>
                </FormControl>
                <FormControl required>
                    <InputLabel htmlFor="grasas">Total Grasas</InputLabel>
                    <Input
                        id="grasas"
                        name="grasas"
                        type="number"
                        value={sumaGrasas}
                        label="grasas"
                        onChange={handleActualizarGrasas}
                    ></Input>
                </FormControl>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{backgroundColor: '#34495E', borderRadius:'50px' }}
                >
                    Registrar
                </Button>
                </form>
            </div>
        </section>
    )
}