import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes en lugar de Switch
import { Container } from "@mui/material";

import Welcome from './Welcome';
import Login from './Login';
import SignUp from './SignUp';
import Navbar from './components/Navbar';

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
      </div>
    </>
  </Router>
    // <>
    // <Navbar navArrayLinks={navArrayLinks}/>
    // <Router>
    //   <div>
        
    //     <Routes> {/* Utiliza el componente Routes */}
    //       <Route path="/" element={<Welcome />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/signup" element={<SignUp />} />
    //     </Routes>
    //   </div>
    // </Router>
    // </>
  );
}

export default App;
