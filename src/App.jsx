import React, { useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';

import Welcome from './components/Welcome';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import SignUp2 from './Screens/SignUp2';
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
  { title: "Ranking", path: "/ranking" },
  { title: "Reportes", path: "/Report" },
  { title: "Perfil", path: "/profile" },
];

const App = () => {


  const [loggedIn, setLoggedIn] = useState(false); // Track user's login status
  const [UserId, setUserId] = useState(''); // Track user's login status
  return (
    <AuthProvider>
    <Router>

      <div>
        {loggedIn ? <NavbarLoged navArrayLinks={navArrayLinks2} /> : <Navbar navArrayLinks={navArrayLinks} />}

        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} setUserId={setUserId} />} />
          <Route path="/signup2" element={<SignUp2 UserId={UserId}/>}/>
          <Route path="/ranking" element={<Ranking />}/>
          <Route path="/Report" element={<Report />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path="/Main" element={<Main/>}/>
          <Route path='/FoodRecord' element={<FoodRecord/>}/>
          <Route path='/FoodRegister' element={<FoodRegister/>} />
          <Route path='/FoodAdd' element={<FoodAdd/>} />
        </Routes>

        <Footer />
      </div>
      </Router>
      </AuthProvider>
 
  );
};

export default App;
