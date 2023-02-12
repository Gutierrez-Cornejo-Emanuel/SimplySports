import { Button, ButtonBase, Container, Divider, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import * as React from 'react'
import {matchGet} from './api'

import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';


export const Practice = (props) => {
  const practiceType = props.practiceType
  const pTypes = {
    0: <Train setDashView={props.setDashView}></Train>,
    1: 'guided'
  }

  return (
    <Grid container sx={{flexGrow:1}}>
        {pTypes[practiceType]}
    </Grid>
  )
}

const Train = ({setDashView}) => {
    const [matchSelection, setMatchSelection] = React.useState(null);
    const [currMatch, setCurrMatch] = React.useState()
    
    const handleSelect = (event) => {
        setMatchSelection(event.target.id)
        setCurrMatch(matchGet(event.target.id));
    }

    return (
        <Grid container sx={{display:'flex'}}>
            {!matchSelection && (
                <SelectionView handleSelect={handleSelect}></SelectionView>
            )}
            {matchSelection && (
                <MatchView match={currMatch} setDashView={setDashView}></MatchView>
            )}
        </Grid>
    )
}

const SelectionView = ({handleSelect}) => {
    return (
        <Grid container sx={{display:'flex'}}>
            <Grid sx={{display:'flex', flexFlow:'column', flexGrow:1}}>
                <Grid container item 
                sx={{display:'flex',
                flexGrow:1, 
                justifyContent:'center', 
                alignItems:'flex-end',
                padding:'5px'}}>
                    <Button variant="contained" id="select-button"
                    onClick={handleSelect}>select match</Button>
                </Grid>
                <Grid container item
                sx={{display:'flex',
                flexGrow:1,
                justifyContent:'center', 
                alignItems:'flex-start',
                padding:'5px'}}>
                    <Button variant="contained" id="random-button"
                    onClick={handleSelect}>random match</Button>
                </Grid>
            </Grid>
            <Divider orientation="vertical"/>
            <Grid sx={{display:'flex', flexGrow:3, justifyContent:'center', alignItems:'center'}}>
                <h2>Choose one of the options to the left.</h2>
            </Grid>
        </Grid>
    )
  }

const MatchView = ({match, setDashView}) => {
    const matchInfo = {
        "home":match.teams.home.name,
        "away":match.teams.away.name,
        "league":match.league.name,
        "season":match.league.round,
        "year":match.league.season,
        "referee":match.fixture.referee
    }

    const handleClick = () => {
        setDashView()
    }

  return (
    <Grid container sx={{display:'flex', alignItems:'center'}}>
        <Grid sx={{display:'flex', flexFlow:'column'}}>
            <Container sx={{padding:0, margin:0}}>
                <SpanningTable match={matchInfo}></SpanningTable>
            </Container>
            <Container sx={{display:'flex', flexFlow:'column'}}>
                <Button variant="contained">
                    Submit
                </Button>
                <Button variant="contained"
                onClick={handleClick}>
                    Return to Dashboard
                </Button>
            </Container>
        </Grid>
        <Divider orientation="vertical" />
        <Grid sx={{display:'flex', flexGrow:1, justifyContent:'center', alignItems:'center'}}>
            <h2>Options.</h2>
        </Grid>
    </Grid>
  )
}

const SpanningTable = ({match}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 'auto' }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={2}>
              <Typography variant='h4'>Match Summary</Typography>
            </TableCell>
          </TableRow>
          <TableRow sx={{width:'auto'}}>
            <TableCell align='left'>{match['league']}</TableCell>
            <TableCell align='left'>
                {match['year']} {match['season']}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='left'>Referee</TableCell>
            <TableCell align='left'>{match['referee'].split(',')[0]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center' variant='head'>Home</TableCell>
            <TableCell align='center'>Away</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell align='center'>{match['home']}</TableCell>
            <TableCell align='center'>{match['away']}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}