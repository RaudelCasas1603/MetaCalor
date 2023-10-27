import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSignUp() {
    console.log('Usuario:', this.state.username);
    console.log('Contraseña:', this.state.password);
  }

  render() {
    return (
      <div>
        <h2>Crear Cuenta</h2>
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
          <button onClick={this.handleSignUp}>Crear Cuenta</button>
        </div>
      </div>
    );
  }
}

export default SignUp;
