import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
//import { Link } from "react-router-dom"
import { Navigate } from 'react-router-dom';

const defaultTheme = createTheme();
export default function SignIn() {
    const [ValidacionUser, setValidacionUser] = useState(false);

    function onSubmit(event) {
        event.preventDefault(); 

        const formData = new FormData(event.target);
        const model = {
            email: formData.get('Email'),
            password: formData.get('Contraseña')
        };

        fetch('http://localhost:4000/api/usuarios/login', {
            method: 'POST',
            body: JSON.stringify({ Email: model.email, Contraseña: model.password }),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                "Access-Control-Allow-Origin": "*",
                Accept: 'application/json'
            }
        }).then(res => res.json())
            .then(data => data)
            
            .then(function Validar(data) {
                if (data.error) {
                    // MostarAlerta("Usuario y/o  Contraseña invalida")
                } else {
                    if (data.rows) {
                        setValidacionUser(!ValidacionUser)
                    } else {
                     //   MostarAlerta("Usuario y/o  Contraseña invalida")
                    }
                }
            })
            .catch(err => {
                alert(err)
            });
    }

    if (ValidacionUser === true) {
     return <Navigate to='/Productos' replace />; 

    } else {
        return (
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Iniciar Sesión
                        </Typography>
                        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="Email"
                                name="Email"
                                label="Email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Contraseña"
                                label="Contraseña"
                                type="password"
                                id="Contraseña"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Iniciar Sesión
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        );
    }
}
