import React from 'react'
import { List } from '@mui/material'
import { ListItem } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { ListItemText } from '@mui/material';

const news = require('./news_articles.json');
const matches = require('./match_data.json');

const api = () => {
  return (
    <div>api</div>
  )
}

const Match_list = () => {
    return (
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
    )
}

const News_list = () => {
    return (
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
    )
}

export { Match_list, News_list }