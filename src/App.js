import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes en lugar de Switch

import Welcome from './Welcome';
import Login from './Login';
import SignUp from './SignUp';

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
