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
import Metas from './components/Metas';
const navArrayLinks = [ //Links para navbar sin loguear
  { title: "Home", path: "/" },
  { title: "Iniciar sesión", path: "/login" },
  { title: "Registrarse", path: "/signup" },
];

const navArrayLinks2 = [ //Links para navbar ya logueado
  { title: "Menu", path: "/main" }
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
          <Route path="/main" element={<Main />} />
          <Route path="/ranking" element={<Ranking />}/>
          <Route path="/Report" element={<Report />}/>
        </Routes>
        <Footer/>
      </div>
    </>
  </Router>
  );
}

export default App;
