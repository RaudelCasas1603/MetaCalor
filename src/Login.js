import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleLogin() {
    // Aquí puedes agregar lógica para verificar las credenciales del usuario
    // Por ahora, simplemente mostraremos los datos ingresados en la consola.
    console.log('Usuario:', this.state.username);
    console.log('Contraseña:', this.state.password);
  }

  render() {
    return (
      <div>
        <h2>Iniciar sesión</h2>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <button onClick={this.handleLogin}>Iniciar sesión</button>
        </div>
      </div>
    );
  }
}

export default Login;
