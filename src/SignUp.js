import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      name: '',
      email: '',
      weight: '',
      height: '',
      age: '',
      avatar: '',
      imc: '',
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
    const { username, password, name, email, weight, height, age, avatar, imc } = this.state;

    // Construir la URL con parámetros de consulta
    const url = `https://metacalor-e.000webhostapp.com/Access/signUp.php?nombre=${name}&correo=${email}&passwd=${password}&nickname=${username}&peso=${weight}&estatura=${height}&edad=${age}&avatar=${avatar}`;
    if (!username || !password || !name || !email || !weight || !height || !age || !avatar) {
      alert('Por favor, complete todos los campos.');
      return; // No realizar la solicitud si faltan campos
    }
    // Realizar la solicitud GET
    fetch(url)
      .then(response => response.text()) // Cambiar a response.text() en lugar de response.json()
      .then(data => {
        console.log('Respuesta del servidor:', data);
        // Aquí puedes manejar la respuesta del servidor, por ejemplo, mostrar un mensaje al usuario.
      })
      .catch(error => {
        console.error('Error al enviar la solicitud:', error);
        // Aquí puedes manejar errores, por ejemplo, mostrar un mensaje de error al usuario.
      });
}



  render() {
    return (
      <div>
        <h2>Crear Cuenta</h2>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Nombre de usuario"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={this.state.email}
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
          <input
            type="text"
            name="username"
            placeholder="NickName"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="weight"
            placeholder="Peso"
            value={this.state.weight}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="height"
            placeholder="Estatuta"
            value={this.state.height}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            placeholder="Edad"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input
            type="url"
            name="avatar"
            placeholder='Avatar'
            value={this.state.avatar}
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
