import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Outlet, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export const Lounge = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{flexGrow:1}}>
      <Grid>
        <AppBar position="static" sx={{bgcolor:'darkred'}}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Button
                    key='home'
                    onClick={() => navigate('home')}
                    sx={{ my: 2, color: 'white', display: 'block', flexGrow:1}}
                  >
                    Home
                  </Button>
              <Button
                key='dashboard'
                onClick={() => navigate('dashboard')}
                sx={{ my: 2, color: 'white', display: 'block', flexGrow:1}}
              >
                Dashboard
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Grid>
    <Outlet/>
    </Box>
  )
}