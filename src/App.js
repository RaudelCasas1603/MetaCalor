import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes en lugar de Switch

import Welcome from './Screens/Welcome';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';

function App() {
  return (
    <Router>
      <div>
        
        <Routes> {/* Utiliza el componente Routes */}
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
