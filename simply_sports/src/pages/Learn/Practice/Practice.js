import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { fontSize } from '@mui/system';

export const Practice = () => {
  return (
    <Box sx={{flexGrow:1}}>
    <Typography variant='h2' textAlign={'center'}>Training Room</Typography>
      <Grid sx={{display:'grid', gridTemplateColumns:'4fr 1fr', gridTemplateRows:'1fr 1fr'}}>
        <Container  sx={{gridArea:'1 1 1 1'}}>
          <Typography variant='h4'>Learn the Ropes</Typography>
          <Typography paragraph={true}>
            Summary
          </Typography>
        </Container>
        <Button variant="contained" 
        sx={{gridArea:'2 2 2 2', fontSize:'0.75rem', margin:'15px'}}
        >
          Tutorial
        </Button>
        <Container  sx={{gridArea:'1 1 1 1'}}>
        <Typography variant='h4'>Run A Simulation</Typography>
          <Typography paragraph={true}>
            Summary
          </Typography>
        </Container>
        <Button variant="contained" 
        sx={{gridArea:'2 2 2 2', fontSize:'0.75rem', margin:'15px'}}
        >
          Practice Environment
        </Button>
      </Grid>
    </Box>
  )
}
