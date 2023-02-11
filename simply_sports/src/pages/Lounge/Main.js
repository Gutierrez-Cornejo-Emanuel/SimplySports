import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Navbar } from './Navbar/Navbar';
import { Container } from '@mui/material';
import { Match_list, News_list } from './api/api';


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
        <Grid item sx={{height:'50%'}}>
          <Box xs={6}>
            <h2>Upcoming Matches</h2>
            {/* API Call here */}
            <Container sx={{display:'flex', overflow:'scroll', 
            flexFlow:'row', maxHeight:'50vh'}}>
            <Match_list></Match_list>
            </Container>
          </Box>
        </Grid>
        <Grid item sx={{height:'50%'}}>
          <Box xs={6}>
          <h2>Recent News</h2>
          {/* API Call here */}
          <Container sx={{display:'flex', overflow:'scroll', 
          flexFlow:'row', maxHeight:'50vh'}}>
          <News_list></News_list>
          </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
