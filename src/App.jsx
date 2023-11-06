import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes en lugar de Switch

import Welcome from './components/Welcome';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Ranking from './components/Ranking';

const navArrayLinks = [
  { title: "Home", path: "/" },
  { title: "Iniciar sesión", path: "/login" },
  { title: "Registrarse", path: "/signup" },
];

function App() {
  return (
    <Router>
    <>
      <Navbar navArrayLinks={navArrayLinks} />
  
      <div>
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ranking" element={<Ranking />}/>
        </Routes>
        <Footer/>
      </div>
    </>
  </Router>
  );
}

export default App;
