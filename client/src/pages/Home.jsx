import { Box, Button, Container, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
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

const Home = ({user}) => {
    const logout = () =>{
      window.open('http://localhost:5000/auth/logout', '_self');
    }
    const google = () =>{
      window.open('http://localhost:5000/auth/google', '_self');
    }

    return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs" >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h3">
                Welcome {user? user.displayName: 'person'}
              </Typography>
            </Box>
            <Box sx={{
                marginTop: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              <Button
                onClick={user ? logout:google}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                  {user? 'Logout':'Login'}
              </Button>
              
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      );
}

export default Home;
