import { Box, Container } from '@mui/system'
import React from 'react'
import { Grid } from '@mui/material';
import DataTable from './Table/DataTable';
import SelectedListItem from './ButtonList/SelectedList';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = React.useState(true);
  const [dataView, setDataView] = React.useState(0);
  const [buttons, setCurrBet] = React.useState([
    <Button key="0" sx={{margin:'5px'}}
    onClick={() => handleClick("0")}>New Bet</Button>,
    <Button disabled key="1" sx={{margin:'5px'}}
    onClick={() => handleClick("1")}>View Bet</Button>,
    <Button disabled key="2" sx={{margin:'5px'}}
    onClick={() => handleClick("2")}>Edit Bet</Button>,
    <Button key="3" sx={{margin:'5px'}}
    onClick={() => navigate("/training")}>Practice</Button>
  ]);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleViewClick = (event) => {
    setDataView(event)
  }

  const handleClick = (event) => {
    console.log(event)
  }

  const handleBetClick = (event) => {
    if (event !== 999) {
      setCurrBet([
        <Button key="0" sx={{margin:'5px'}}
        onClick={() => handleClick("0")}>New Bet</Button>,
        <Button key="1" sx={{margin:'5px'}}
        onClick={() => handleClick("1")}>View Bet</Button>,
        <Button key="2" sx={{margin:'5px'}}
        onClick={() => handleClick("2")}>Edit Bet</Button>,
        <Button key="3" sx={{margin:'5px'}}
        onClick={() => navigate("/training")}>Practice</Button>
      ])
    } else {
      setCurrBet([
        <Button key="0" sx={{margin:'5px'}}
        onClick={() => handleClick("0")}>New Bet</Button>,
        <Button disabled key="1" sx={{margin:'5px'}}
        onClick={() => handleClick("1")}>View Bet</Button>,
        <Button disabled key="2" sx={{margin:'5px'}}
        onClick={() => handleClick("2")}>Edit Bet</Button>,
        <Button key="3" sx={{margin:'5px'}}
        onClick={() => navigate("/training")}>Practice</Button>
      ])
    }
  }

  return (
    <Box>
      {auth && (
        <div>
          <Container>
            <h1>Welcome, User0</h1>
          </Container>
          <Grid sx={{display: 'grid', gridTemplateColumns: '20% 60% 20%'}}>
            <Grid sx={{gridArea: '1 1 1 1', margin:'5px'}}>
              <SelectedListItem setDataView={handleViewClick}></SelectedListItem>
            </Grid>
            <Grid sx={{gridArea: '1 2 1 2', margin:'15px'}}>
              <DataTable dataView={dataView} betChoice={handleBetClick}></DataTable>
            </Grid>
            <Grid sx={{gridArea: '1 3 1 3', margin:'5px'}}>
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
                sx={{width:'100%'}}
              >
                {buttons}
              </ButtonGroup>
            </Grid>
          </Grid>
        </div>
      )}
      {!auth && (
        <div>
          <h1>Not logged in!</h1>
        </div>
      )}

    </Box>
  )
}
