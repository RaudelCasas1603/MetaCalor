import React, { useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { Select } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';


const defaultTheme = createTheme();

export default function SignUp2(UserId) {

        const [sexo, setSexo] = useState('');
        const [actividad, setActividad] = useState('');

        const handleChange = (event) => {
          setSexo(event.target.value);
        };
      
        const handleChange2 = (event) => {
            setActividad(event.target.value);
          };

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        data.append('sexo', sexo);
        data.append('actividad', actividad);

        data.append('UserId', (UserId.UserId));
          console.log({
            peso: data.get('peso'),
        //    estatura: data.get('estatura'),
        //    sexo: sexo,
        //    actividad: actividad,
          });

         axios.post('https://metacalor-e.000webhostapp.com/Access/signUp2.php', data)
             .then(response => {
                 console.log(response);
                 if (response.data.success) {
                     console.log('Registro exitoso');
                     if (response.data.redirect) {
                         // Redirige a la página especificada
                        navigate('/login');
                     }
                 } else {
                     console.error('Error al registrar:', response.data.message);
                 }
             })
             .catch(error => {
                 console.error('Error de red:', error);
             });
    }


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
                    <Typography component="h1" variant="h5" textAlign="center">
                        Nos alegra que estés aquí. ¡Terminemos de personalizar tu experiencia!
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 , right:0,}} width={'100%'}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="peso"
                                    required
                                    fullWidth
                                    id="peso"
                                    label="Peso actual en Kg"
                                    autoFocus
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="estatura"
                                    label="Estatura en Cm"
                                    name="estatura"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="edad"
                                    label="Edad"
                                    type="number"
                                    id="edad"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl required>
                            <Select
                                    labelId="gender"
                                    id="sexo"
                                    value={sexo}
                                    autoWidth
                                    label="Sexo"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'Masculino'}>Masculino</MenuItem>
                                    <MenuItem value={'Femenino'}>Femenino</MenuItem>
                                </Select>
                                </FormControl>
                                <FormHelperText>Sexo</FormHelperText>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl required>
                                <Select
                                    labelId="activity"
                                    id="actividad"
                                    value={actividad}
                                    label="Actividad"
                                    onChange={handleChange2}
                                >
                                    <MenuItem value={1.2}>Sedentario</MenuItem>
                                    <MenuItem value={1.375}>Ligero</MenuItem>
                                    <MenuItem value={1.55}>Moderado</MenuItem>
                                    <MenuItem value={1.725}>Activo</MenuItem>
                                    <MenuItem value={1.9}>Muy activo</MenuItem>
                                </Select>
                                </FormControl>
                                <FormHelperText>Actividad</FormHelperText>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, backgroundColor: '#16A085' }}
                        >
                            Terminar
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
