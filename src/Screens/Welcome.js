import React from 'react'
import Spline from '@splinetool/react-spline';

export default function Welcome() {
  return (
    <div>
        <Spline scene="https://prod.spline.design/qigPQzdTK7kWSHXR/scene.splinecode" />
        <h1>¡Bienvenido!</h1>
        <a href="/login">Iniciar sesión</a>
        <br />  
        <a href="/signup">Crear cuenta</a>
    </div>
  )
}

