import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes en lugar de Switch

import Welcome from './Welcome';
import Login from './Login';
import SignUp from './SignUp';
import Navbar from './components/Navbar';
import Footer from './components/footer';

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
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer/>
      </div>
    </>
  </Router>
  );
}

export default App;
