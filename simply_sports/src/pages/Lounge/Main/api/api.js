import React from 'react'
import { List } from '@mui/material'
import { ListItem } from '@mui/material';
import { ListItemButton } from '@mui/material';
import { ListItemText } from '@mui/material';

const matchApiRoute = "/team19/api/current-matches"
const newsApiRoute = "/team19/api/news"
const allmatchesApiRoute = "/team19/api/sports"

const MatchList = () => {
    const [curr_matches, setCurrentMatches] = React.useState([]);

    React.useEffect(() => {
        fetch(matchApiRoute)
            .then(response => response.json())
            .then(data =>
                setCurrentMatches(data));
    }, []);

    return (
        <List sx={{maxHeight:'315px', width:'100%', overflow:'scroll'}}>
        {curr_matches.map((match) => (
            <ListItem key={match._id.$oid} disablePadding 
            sx={{width:'250px', display:'inline-flex'}}>
                <ListItemButton key={match._id.$oid}>
                <img src={match.teams.home.logo} alt="team logo" width="25"/>
                    <ListItemText
                    primary={match.teams.home.name + " vs. " + match.teams.away.name}/>
                <img src={match.teams.away.logo} alt="team logo" width="25"/>
                </ListItemButton>
            </ListItem>
        ))}
        </List>
    )
}

const NewsList = () => {
    const [news, setNews] = React.useState([]);

    React.useEffect(() => {
        fetch(newsApiRoute)
            .then(response => response.json())
            .then(data =>
                setNews(data));
    }, []);
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
    const [all_matches, setAllMatches] = React.useState([]);

    React.useEffect(() => {
        fetch(allmatchesApiRoute)
            .then(response => response.json())
            .then(data =>
                setAllMatches(data));
    }, []);

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
        {all_matches.map((match) => (
            <ListItem key={match._id.$oid} disablePadding 
            sx={{width:'250px', display:'inline-flex'}}>
                <ListItemButton key={match._id.$oid} onClick={() => handleClick(match)}>
                    <ListItemText
                    primary={ match.teams.home.name + " vs. " + match.teams.away.name}/>
                </ListItemButton>
            </ListItem>
        ))}
        </List>
    )
}

export { MatchList, NewsList, ReactiveMatchList }