import React from 'react'
import imagen1 from './images/Plato1.png';
import imagen2 from './images/Plato2.png';
import Diversity1 from '@mui/icons-material/Diversity1';
import Logro from '@mui/icons-material/EmojiEvents';
import Grafica from '@mui/icons-material/Poll';
import Calorias from '@mui/icons-material/Whatshot';
import Galleta from '@mui/icons-material/Cookie';
import Dispositivos from '@mui/icons-material/DashboardCustomize';

export default function Welcome() {
  return (
    <div className="container" style={{ marginTop: '100px'}}>
      <div className="row">
        <div className="col-md-6 mr-auto">
          <h2 style={{ fontSize: '80px', lineHeight: '80px', marginBottom: '20px', fontWeight: '900' }}>
            Una buena salud empieza por una buena dieta.</h2>
          <div className="col-md-9">
            <p>¿Quieres prestar más atención a tu alimentación? Controla tus comidas, conoce tus hábitos y alcanza tus objetivos con MetaCalor.</p>
            <button className="btn btn-secondary" style={{ backgroundColor: "#34495E"}} onClick={() => window.location.href = "/Login"}>Empieza gratis</button>
          </div>
        </div>
        <div className="col-md-6 mr-auto">
        <img src={imagen1} alt="Imagen" width="100%" height="500px" />
        </div>
      </div>

      <div className="row" style={{ marginTop: '100px'}}>
      <div className="col-md-6 mr-auto">
        <img src={imagen2} alt="Imagen" width="100%" height="500px" />
        </div>
        <div className="col-md-6 mr-auto">
          <h2 style={{ fontSize: '80px', lineHeight: '80px', marginBottom: '20px', fontWeight: '900' }}>
          Elige entre miles de alimentos para tu registro.</h2>
          <div className="col-md-9">
            <p>Accede a un desglose por calorías y nutrientes, compara los tamaños de las porciones y descubre cómo los alimentos que consumes refuerzan tus objetivos.</p>
          </div>
        </div>
      </div>
     
      <div className="container text-center" style={{ marginTop: '100px'}}>
        <h2 style={{ fontSize: '60px', lineHeight: '60px', marginBottom: '20px', fontWeight: '900' }}>
        <span style={{ color: '#34495E' }}>Las herramientas para tus objetivos</span>
        </h2>
        <hr />
        <div className="row">
          <div className="col-md-4 mt-4 mb-5">
          <Diversity1  sx={{ color: '#16A085', fontSize: 40 }}/>
            <h2 className='mt-3'>Seguimiento Personalizado</h2>
            <div className='text'>Ofrecemos a cada usuario una experiencia única al adaptarse a sus metas individuales de salud y fitness.</div>
          </div>
          <div className="col-md-4 mt-4 mb-5">
          <Galleta  sx={{ color: '#16A085', fontSize: 40 }}/>
            <h2 className='mt-3'>Miles de alimentos</h2>
            <div className='text'>Ofrecemos disponibilidad de una amplia y detallada base de datos de alimentos que simplifica el registro de la ingesta diaria.</div>
          </div>
          <div className="col-md-4 mt-4 mb-5">
          <Calorias  sx={{ color: '#16A085', fontSize: 40 }}/>
            <h2 className='mt-3'>Gestión de el gasto calórico</h2>
            <div className='text'>La web permite a los usuarios registrar su gasto calórico diario.</div>
          </div>
          <div className="col-md-4 mt-4 mb-5">
          <Logro  sx={{ color: '#16A085', fontSize: 40 }}/>
            <h2 className='mt-3'>Comunidad y Red Social</h2>
            <div className='text'>Puedes interactuar con mas personas conectarse, compartir logros y brindarse apoyo mutuo para lograr sus metas fitness.</div>
          </div>
          <div className="col-md-4 mt-4 mb-5">
          <Grafica  sx={{ color: '#16A085', fontSize: 40 }}/>
            <h2 className='mt-3'>Análisis de Datos y Estadísticas</h2>
            <div className='text'>Proporcionamos herramientas visuales y gráficos detallados para que los usuarios comprendan y celebren su progreso a lo largo del tiempo.</div>
          </div>
          <div className="col-md-4 mt-4 mb-5">
          <Dispositivos  sx={{ color: '#16A085', fontSize: 40 }}/>
            <h2 className='mt-3'>Accesibilidad y Dispositivos Múltiples</h2>
            <div className='text'>Puede acceder y realizar un seguimiento de su progreso desde diversos dispositivos, como teléfonos móviles, tabletas y computadoras.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

