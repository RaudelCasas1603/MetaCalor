import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//
import { Switch } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';


const defaultTheme = createTheme();
const opcionesDeImagen = [
  { value: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png', label: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png'},
  { value: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png', label: 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png' },
  { value: 'https://img.freepik.com/vector-premium/icono-foto-perfil-cool-man-profile-icon-male-head-ilustracion-vector-diseno-plano-cara_750364-411.jpg?w=2000', label: 'https://img.freepik.com/vector-premium/icono-foto-perfil-cool-man-profile-icon-male-head-ilustracion-vector-diseno-plano-cara_750364-411.jpg?w=2000' },
];

export default function SignUp({setLoggedIn, setUserId}) {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    //event.currentTarget.reset();
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password')
    // });

    axios.post('https://metacalor-e.000webhostapp.com/Access/signUp.php', data)
    .then(response => {
      console.log(response);
      if (response.data.success) {
        console.log('Registro exitoso');
        if (response.data.redirect) {
          // Redirige a la página especificada
          setLoggedIn(true);
          setUserId(response.data.id)
          navigate('/signup2');
        }
      } else {
        console.error('Error al registrar:', response.data.message);
      }
  })
  .catch(error => {
      console.error('Error de red:', error);
  });
}

//Poder escoger imagen
const [usarImagenPersonalizada, setUsarImagenPersonalizada] = React.useState(false);
const [tipoImagen, setTipoImagen] = React.useState('');

const handleToggleImagenPersonalizada = () => {
  setUsarImagenPersonalizada(!usarImagenPersonalizada);
};

const handleTipoImagenChange = (event) => {
  setTipoImagen(event.target.value);
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
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5" textAlign="center">
          ¡Te damos la bienvenida! Personalicemos MetaCalor de acuerdo con tus objetivos.
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 , right:0,}} width={'100%'}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombres"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Apellidos"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo electronico"
                  name="email"
                  autoComplete="email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              
              {/* <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="profileImage"
                  label="URL de la imagen de perfil"
                  name="profileImage"
                />
              </Grid> */}

              <Grid item xs={12}>
                <Switch
                  checked={usarImagenPersonalizada}
                  onChange={handleToggleImagenPersonalizada}
                  color="primary"
                />
                <label>Usar imagen personalizada</label>

                {usarImagenPersonalizada ? (
                  <TextField
                    fullWidth
                    id="profileImage"
                    label="URL de la imagen personalizada"
                    name="profileImage"
                  />
                ) : (
                  <TextField
                      fullWidth
                      id="profileImage"
                      label="Seleccionar opción de imagen"
                      name="profileImage"
                      select
                      value={tipoImagen}
                      onChange={handleTipoImagenChange}
                    >
                      <MenuItem value="">
                        <em>Seleccione una opción</em>
                      </MenuItem>
                      {opcionesDeImagen.map((opcion) => (
                        <MenuItem key={opcion.value} value={opcion.value}>
                          <img src={opcion.label} style={{width:80, height:80}}/>
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#16A085' }}
            >
              Registrarse
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Ya tienes cuenta? Iniciar sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
