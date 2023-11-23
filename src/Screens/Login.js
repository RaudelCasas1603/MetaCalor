
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

const defaultTheme = createTheme();

export default function Login({setLoggedIn}) {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);

  axios.post('https://metacalor-e.000webhostapp.com/Access/login.php', data)
  .then(response => {
    console.log(response);
    if (response.data.success) {
      console.log('Login successful');
      if (response.data.redirect) {
        // Redirect to the specified page
        setLoggedIn(true);
        navigate('/main');
      }
    } else {
      console.error('Login failed:', response.data.message);
    }
  })
  .catch(error => {
    console.error('Network error:', error);
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
            marginBottom: 15
          }}
        >
           <Avatar sx={{ m: 1, backgroundColor: '#16A085' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
