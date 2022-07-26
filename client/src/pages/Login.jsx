import React from 'react';
import {Avatar, ThemeProvider, createTheme, Box, TextField, Button,CssBaseline, Checkbox, Typography, Container, FormControlLabel,} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';
import Copyright from '../Components/Copyright';

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#0288d1',
          },
          secondary: {
            // This is green.A700 as hex.
            main: '#651fff',
          },
      },
  });
  
const Login = () => {
  
  const google = () =>{
    window.open('http://localhost:5000/auth/google', '_self');
  }

    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" className="container">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
          <Box sx={{
              marginTop: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            Or
            <Button
                onClick={google}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                <GoogleIcon margin='2'/>
                Login with Google
            </Button>
            
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    );
}
export default Login;
