import React from 'react';
import { Link } from 'react-router-dom';
import Calorias from '@mui/icons-material/Whatshot';
import Platillos from '@mui/icons-material/LocalDiningRounded';
import Reportes from '@mui/icons-material/DescriptionRounded';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/count.css';
import imagen1 from '../components/images/image2.png';
import imagen3 from '../components/images/platilloIcon.png';


const Bottoms = () => {
  return (
    <div className="d-flex justify-content-center align-items-center barraBotones">
      <Link to="/Report" className="reportes">
        <Reportes sx={{position:'absolute', marginLeft:'45px', fontSize:'30px', marginBottom:'40px'}}/>
        Generar reporte
      </Link>
      <div className="linea-vertical"></div>
      <Link to="/foodregister" className="calorias">
      <Calorias sx={{position:'absolute', marginLeft:'50px', fontSize:'30px', marginBottom:'40px'}}/>
      Registrar calorías
      </Link>
      <div className="linea-vertical2"></div>
      <Link to="/foodAdd" className="platillos">
      <Platillos sx={{position:'absolute', marginLeft:'43px', fontSize:'30px', marginBottom:'40px'}}/>
        Agregar platillo
      </Link>
    </div>
  );
};

export default Bottoms;