import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/count.css';
import imagen1 from '../components/images/image2.png';
import imagen2 from '../components/images/fireIcon.png';
import imagen3 from '../components/images/platilloIcon.png';


const Bottoms = () => {
    return(
        <div className="d-flex justify-content-center align-items-center barraBotones">
            <a href="./components/Report" className='reportes'>
                <img className="position-absolute image1" width={'40px'} src={imagen1}/>
                Generar reporte
            </a>
            <div className="linea-vertical"></div>
            <a className='calorias'>
                <img class="position-absolute image1" width={'40px'} src={imagen2}/>
                    Registrar calorias
            </a>
            <div className="linea-vertical2"></div>
                <a className='platillos'>
                    <img class="position-absolute image1" width={'40px'} src={imagen3}/>
                    Agregar platillo</a>
        </div>
    );
}

export default Bottoms;