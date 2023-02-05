import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export const News = () => {
  return (
    <Box sx={{flexGrow:1}}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>Upcoming Matches</h1>
        </Grid>
        <Grid item xs={8}>
          <h1>Latest News</h1>
        </Grid>
      </Grid>
    </Box>
  )
}
