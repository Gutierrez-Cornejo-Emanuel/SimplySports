import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { MainMenuList } from './MenuList/MenuList';

import { MatchList, NewsList } from './api/api';
import {sports, leagues, teams} from './api/const/homemenuItems';

export const Main = () => {

  return (
    <Box id="home-tab" sx={{flexGrow:1, display:'flex'}}>
      <Grid container sx={{
        display: 'flex', 
        flexGrow:1,
        flexFlow:'column'}}>
        <AppBar position="static" sx={{bgcolor:'darkred'}}>
          <Container maxWidth="xl" sx={{display:'flex', justifyContent:'center'}}>
            <Toolbar disableGutters sx={{justifyContent:'space-around', flexGrow:'1'}}>
            <MainMenuList items={sports}></MainMenuList>
            <MainMenuList items={leagues}></MainMenuList>
            <MainMenuList items={teams}></MainMenuList>
            </Toolbar>
          </Container>
        </AppBar>
        <Grid item sx={{flexGrow:'1', display:'flex', flexFlow:'column'}}>
          <Box xs={6} sx={{flexGrow:'1', height:'100%'}}>
            <h2>Upcoming Matches</h2>
            <MatchList></MatchList>
          </Box>
        </Grid>
        <Grid item sx={{flexGrow:'1', display:'flex', flexFlow:'column'}}>
          <Box xs={6} sx={{flexGrow:'1', height:'100%'}}>
            <h2>Recent News</h2>
            <NewsList></NewsList>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}