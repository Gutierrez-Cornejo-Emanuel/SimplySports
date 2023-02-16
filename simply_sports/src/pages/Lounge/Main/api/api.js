import React from 'react'
import { List } from '@mui/material'
import { ListItem } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { ListItemText } from '@mui/material';

const news = require('./news_articles.json');
const matches = require('./match_data.json');

const MatchList = () => {
    return (
        <List sx={{maxHeight:'250px', width:'100%', overflow:'scroll'}}>
        {matches.map((match) => (
            <ListItem key={match._id.$oid} disablePadding 
            sx={{width:'250px', display:'inline-flex'}}>
                <ListItemButton key={match._id.$oid}>
                    <ListItemText
                    primary={match.teams.home.name + " vs. " + match.teams.away.name}/>
                </ListItemButton>
            </ListItem>
        ))}
        </List>
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

const ReactiveMatchList = ({updateSelection}) => {
    const handleClick = (match) => {
        const selectedMatch = {
          target : {
            id: "select-button"
          },
          match : match
        }
        updateSelection(selectedMatch)
      }

    return (
        <List sx={{maxHeight:'750px', width:'100%', overflow:'scroll'}}>
        {matches.map((match) => (
            <ListItem key={match._id.$oid} disablePadding 
            sx={{width:'250px', display:'inline-flex'}}>
                <ListItemButton key={match._id.$oid} onClick={() => handleClick(match)}>
                    <ListItemText
                    primary={match.teams.home.name + " vs. " + match.teams.away.name}/>
                </ListItemButton>
            </ListItem>
        ))}
        </List>
    )
}

export { MatchList, NewsList, ReactiveMatchList }