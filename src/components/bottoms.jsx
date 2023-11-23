import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/count.css';
import imagen1 from '../components/images/image2.png';
import imagen2 from '../components/images/fireIcon.png';
import imagen3 from '../components/images/platilloIcon.png';


const Bottoms = () => {
  return (
    <div className="d-flex justify-content-center align-items-center barraBotones">
      <Link to="/Report" className="reportes">
        <img className="position-absolute image1" width="40px" src={imagen1} />
        Generar reporte
      </Link>
      <div className="linea-vertical"></div>
      <Link to="/foodregister" className="calorias">
        <img className="position-absolute image1" width="40px" src={imagen2} />
        Registrar calorias
      </Link>
      <div className="linea-vertical2"></div>
      <Link to="/FoodRecord" className="platillos">
        <img className="position-absolute image1" width="40px" src={imagen3} />
        Agregar platillo
      </Link>
    </div>
  );
};

export default Bottoms;