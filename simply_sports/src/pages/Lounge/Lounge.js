import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Outlet, useNavigate } from 'react-router-dom';

export const Lounge = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{flexGrow:1, display:'flex', flexFlow:'column'}}>
      <Grid id='lounge-view' sx={{flexGrow:1, display:'flex', flexFlow:'column'}}>
        <AppBar position="static" sx={{bgcolor:'darkred'}}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Button
                key='main'
                id='main'
                onClick={() => navigate('home')}
                sx={{ my: 2, color: 'white', display: 'block', flexGrow:1}}
              >
              Main
              </Button>
              <Button
              key='dashboard'
              id='dashboard'
              onClick={() => navigate('dashboard')}
              sx={{ my: 2, color: 'white', display: 'block', flexGrow:1}}
              >
              Dashboard
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
        <Outlet></Outlet>
      </Grid>
    </Box>
  )
}