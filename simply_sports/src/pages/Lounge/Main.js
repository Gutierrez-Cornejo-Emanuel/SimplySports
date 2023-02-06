import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Navbar } from './Navbar/Navbar';
import { Container } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const news = require('../../news_articles.json');
const matches = require('../../match_data.json');


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
              <List>
                  {matches.map((match) => (
                      <ListItem key={match._id.$oid} disablePadding>
                          <ListItemButton key={match._id.$oid}>
                              <ListItemText 
                              primary={match.teams.home.name + " vs. " + match.teams.away.name}/>
                          </ListItemButton>
                      </ListItem>
                  ))}
              </List>
            </Container>
          </Box>
        </Grid>
        <Grid item sx={{height:'50%'}}>
          <Box xs={6}>
          <h2>Recent News</h2>
          {/* API Call here */}
          <Container sx={{display:'flex', overflow:'scroll', 
          flexFlow:'row', maxHeight:'50vh'}}>
            <List>
                {news.map((article) => (
                    <ListItem key={article._id.$oid} disablePadding>
                        <ListItemButton key={article._id.$oid}
                        href={article.link}
                        target="_blank">
                            <ListItemText primary={article.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
          </Container>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
