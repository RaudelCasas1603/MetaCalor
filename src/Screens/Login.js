// import React, { Component } from 'react';

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: '',
//     };
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleLogin = this.handleLogin.bind(this);
//   }

//   handleInputChange(event) {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   }

//   handleLogin() {
//     // Aquí puedes agregar lógica para verificar las credenciales del usuario
//     // Por ahora, simplemente mostraremos los datos ingresados en la consola.
//     console.log('Usuario:', this.state.username);
//     console.log('Contraseña:', this.state.password);
//     const { username, password } = this.state;
//     const url = `https://metacalor-e.000webhostapp.com/Access/login.php?nickname=${username}&passwd=${password}`;
//     if(!username || !password){
//       alert('Por favor, complete todos los campos.');
//       return;
//     }

//     fetch(url)
//       .then(response => response.text())
//       .then(data => {
//         console.log('Respuesta del servidor:', data);
//       })
//       .catch(error => {
//         console.error('Error al enviar la solicitud:', error);
//       });
//   }

//   render() {
//     return (
//       <div>
//         <h2>Iniciar sesión</h2>
//         <div>
//           <input
//             type="text"
//             name="username"
//             placeholder="Nombre de usuario"
//             value={this.state.username}
//             onChange={this.handleInputChange}
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             name="password"
//             placeholder="Contraseña"
//             value={this.state.password}
//             onChange={this.handleInputChange}
//           />
//         </div>
//         <div>
//           <button onClick={this.handleLogin}>Iniciar sesión</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
           <Avatar sx={{ m: 1, backgroundColor: '#16A085' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electronico"
              name="email"
              autoComplete="email"
              type="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained" 
              sx={{ mt: 3, mb: 2, backgroundColor: '#16A085' }}
            >
              Iniciar sesión
            </Button>
            <Grid container>
              <Grid item xs>
                
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"No tienes cuenta? Registrarse"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
