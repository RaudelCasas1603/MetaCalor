import React from 'react';
import './Welcome.css'; // Import the CSS file

export default function Welcome() {
  return (
    <div>
      <h1 className="title">¡Bienvenido!</h1> {/* Use className for applying CSS classes */}
      <h2 className="subtitle">About Us</h2>
      <p className="text">
        MetaCalor es una aplicacion diseñada para ayudar a las personas a poder llevar 
        un mejor control de cuantas calorias consumen al dia, y asi poder llevar una
        vida mas saludable.
      </p>
    </div>
  );
}
