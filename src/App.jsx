import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes en lugar de Switch

import Welcome from './components/Welcome';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Navbar from './components/Navbar';
import NavbarLoged from './components/styles/NavbarLoged';
import Footer from './components/footer';
import Ranking from './components/Ranking';
import Report from './components/Report';
import Main from './Screens/Main';
import Profile from './components/Profile'
import FoodRecord from './Screens/FoodRecord';
import FoodRegister from './components/foodregister';

const navArrayLinks = [ //Links para navbar sin loguear
  { title: "Home", path: "/" },
  { title: "Iniciar sesión", path: "/login" },
  { title: "Registrarse", path: "/signup" },
];

const navArrayLinks2 = [ //Links para navbar ya logueado
  { title: "Menu", path: "/main" },
  { title: "Configuracion", path: "/configuracion" }
];


function App() {

  const [loggedIn, setLoggedIn] = useState(false); // Track user's login status
  return (
    <Router>
    <>
    {loggedIn ? <NavbarLoged navArrayLinks={navArrayLinks2}/> : <Navbar navArrayLinks={navArrayLinks} />}
  
      <div>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
          <Route path="/ranking" element={<Ranking />}/>
          <Route path="/Report" element={<Report />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path="/Main" element={<Main/>}/>
          <Route path='/FoodRecord' element={<FoodRecord/>}/>
          <Route path='/FoodRegister' element={<FoodRegister/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  </Router>
  );
}

export default App;
