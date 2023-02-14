import { Button, Divider, Grid } from '@mui/material'
import * as React from 'react'
import {matchGet} from './api'
import { ReactiveMatchList } from '../../Main/api/api';
import {MatchView } from './Match';


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
      } else if (event.target.id === "select-button") {
        setCurrMatch(event.match)
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
                <SelectionView updateSelection={updateSelection} />
              )}

          </Grid>
      </Grid>
    )
  }

const SelectionView = ({ updateSelection }) => {
  return (
    <Grid container sx={{display:'flex', height:'100%'}}>
      <ReactiveMatchList updateSelection={updateSelection}></ReactiveMatchList>
    </Grid>
  )
}
