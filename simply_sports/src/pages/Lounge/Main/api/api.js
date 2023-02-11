import React from 'react'
import { List, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { ListItem } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Container } from '@mui/system';

const news = require('./news_articles.json');
const matches = require('./match_data.json');

const api = () => {
  return (
    <div>api</div>
  )
}

const MatchList = () => {
    return (
        <Container>
            <List sx={{maxHeight:'250px', overflow:'scroll'}}>
            {matches.map((match) => (
                <ListItem key={match._id.$oid} disablePadding
                sx={{display:'inline-flex', width:'max-content'}}>
                    <ListItemButton key={match._id.$oid}>
                        <ListItemText 
                        primary={match.teams.home.name + " vs. " + match.teams.away.name}/>
                    </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Container>

    )
}

const NewsList = () => {
    return (
        <List sx={{maxHeight:'250px', overflow:'scroll'}}>
        {news.map((article) => (
            <ListItem key={article._id.$oid} disablePadding
            sx={{display:'inline-flex', width:'max-content'}}>
                <ListItemButton key={article._id.$oid}
                href={article.link}
                target="_blank">
                    <ListItemText primary={article.title} />
                </ListItemButton>
            </ListItem>
        ))}
        </List>
    )
}

export { MatchList, NewsList }