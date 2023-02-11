import React from 'react'
import Appbar from './components/Appbar/Appbar';
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Grid container sx={{height:'100vh', display:'flex', flexFlow:'column', overflow:'hidden'}}>
      <Appbar isLoggedIn='false'/>
      <Outlet/>
    </Grid>
  );
}

export default App;
