import { Button, Container, Divider, Grid, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import * as React from 'react'
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

export const MatchView = ({match, setDashView}) => {
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