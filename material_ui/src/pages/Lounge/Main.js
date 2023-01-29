import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Navbar } from './Navbar/Navbar';

export const Main = () => {

  return (
    <Box sx={{flexGrow:1, display:'flex'}}>
      <Grid>
        <Navbar />
      </Grid>

      <Grid container sx={{
        display: 'grid', 
        flexGrow:1, 
        gridTemplate:'1 2',}}>
        <Grid item sx={{height:'100%'}}>
          <Box xs={6}>
          <h2>Upcoming Matches</h2>
          </Box>
        </Grid>
        <Grid item sx={{}}>
          <Box xs={6}>
          <h2>Recent News</h2>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
