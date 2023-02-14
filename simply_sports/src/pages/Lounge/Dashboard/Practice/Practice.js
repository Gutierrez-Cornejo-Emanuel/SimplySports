import { Button, Container, Divider, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import * as React from 'react'
import {matchGet} from './api'
import { MatchList } from '../../Main/api/api';

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
      if (event.target.id === "random-button") {
        setCurrMatch(matchGet(event.target.id));
      }
    }

    return (
        <Grid container sx={{display:'flex'}}>
            {!matchSelection && (
                <MatchTypeView updateSelection={handleSelect} setDashView={setDashView}></MatchTypeView>
            )}
            {matchSelection && (
                <MatchView match={currMatch} setDashView={setMatchSelection}></MatchView>
            )}
        </Grid>
    )
}

const MatchTypeView = ({updateSelection, setDashView}) => {
  const [selectMatch, setSelectMatch] = React.useState(null);

  const handleSelect = (event) => {
    setSelectMatch(1)
  }

  const handleRandom = (event) => {
    updateSelection(event)
  }

  return (
      <Grid container sx={{display:'grid', gridTemplate:'1fr / 2fr 4fr', flexGrow:1}}>
          <Grid sx={{display:'flex', flexGrow:1}}>
            <Grid sx={{display:'flex', flexFlow:'column', flexGrow:1, maxWidth:'max-content'}}>
              <Grid container item 
                sx={{display:'flex',
                flexGrow:1, 
                justifyContent:'center',
                alignContent:'flex-end',
                padding:'5px'}}>
                    <Button variant="contained" id="select-button"
                    onClick={handleSelect} sx={{height:'max-content', width:'100%'}}>
                    select match</Button>
                </Grid>
                <Grid container item
                sx={{display:'flex',
                flexGrow:1,
                justifyContent:'center',
                alignContent:'center',
                padding:'5px'}}>
                    <Button variant="contained" id="random-button"
                    onClick={handleRandom} sx={{height:'max-content', width:'100%'}}>
                    random match</Button>
                </Grid>
                <Grid container item
                sx={{display:'flex',
                flexGrow:1,
                justifyContent:'center',
                alignContent:'flex-start',
                padding:'5px'}}>
                    <Button variant="contained" id="random-button"
                    onClick={setDashView} sx={{height:'max-content', width:'100%'}}>
                    return to dashboard</Button>
                </Grid>
            </Grid>
            <Divider orientation="vertical"/>
          </Grid>

          <Grid sx={{display:'flex', flexGrow:3, justifyContent:'center', alignItems:'center'}}>
              {!selectMatch && (
                <h2>Choose one of the options to the left.</h2>
              )}
              {selectMatch && (
                <SelectionView />
              )}

          </Grid>
      </Grid>
    )
  }

const SelectionView = () => {
  console.log('select-match-view')
  return (
    <div>
      <MatchList></MatchList>
    </div>
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
        setDashView(null)
    }

    const handleSubmit = () => {
      console.log('submit-button')
    }

  return (
    <Grid container sx={{display:'flex', alignItems:'center'}}>
        <Grid sx={{display:'flex', flexFlow:'column'}}>
            <Container sx={{padding:0, margin:0}}>
                <SpanningTable match={matchInfo}></SpanningTable>
            </Container>
            <Container sx={{display:'flex', flexFlow:'column', width:'auto'}}>
                <Button variant="contained" onClick={handleSubmit} disabled
                sx={{margin:'5px'}}>
                    Submit
                </Button>
                <Button variant="contained" onClick={handleClick}
                sx={{margin:'5px'}}>
                    Return to Match Selection
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
              <Typography variant='h4' fontWeight={'bold'}>Match Summary</Typography>
            </TableCell>
          </TableRow>
          <TableRow sx={{width:'auto'}}>
            <TableCell align='left'>
                {match['league']}
            </TableCell>
            <TableCell align='left'>
                {match['year']} {match['season']}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='left'>Referee</TableCell>
            <TableCell align='left'>{match['referee'].split(',')[0]}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align='center'>
              <Typography fontWeight={'bold'}>
                Home
              </Typography>
            </TableCell>
            <TableCell align='center'>
              <Typography fontWeight={'bold'}>
                Away  
              </Typography>
            </TableCell>
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