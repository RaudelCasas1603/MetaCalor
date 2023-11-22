import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';

import Welcome from './components/Welcome';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Navbar from './components/Navbar';
import NavbarLoged from './components/NavbarLoged';
import Footer from './components/footer';
import Ranking from './components/Ranking';
import Report from './components/Report';
import Main from './Screens/Main';
import Profile from './components/Profile';
import FoodRecord from './components/FoodRecord';
import FoodRegister from './components/foodregister';
import FoodAdd from './components/foodAdd';

const navArrayLinks = [
  { title: "Home", path: "/" },
  { title: "Iniciar sesión", path: "/login" },
  { title: "Registrarse", path: "/signup" },
];

const navArrayLinks2 = [
  { title: "Menu", path: "/main" },
  { title: "Configuracion", path: "/profile" },
];

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AuthProvider>
    <Router>

      <div>
        {loggedIn ? <NavbarLoged navArrayLinks={navArrayLinks2} /> : <Navbar navArrayLinks={navArrayLinks} />}

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
          <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/report" element={<Report />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/main" element={<Main />} />
          <Route path="/foodrecord" element={<FoodRecord />} />
          <Route path="/foodregister" element={<FoodRegister />} />
          <Route path="/foodadd" element={<FoodAdd />} />
        </Routes>

        <Footer />
      </div>
      </Router>
      </AuthProvider>
 
  );
};

export default App;
