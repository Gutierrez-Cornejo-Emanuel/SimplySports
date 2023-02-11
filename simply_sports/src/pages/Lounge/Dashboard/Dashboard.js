import { Box, Container } from '@mui/system'
import React from 'react'
import { Grid } from '@mui/material';
import DataTable from './Table/DataTable';
import {TableFilters} from './Table/TableFilters'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import { SignIn } from '../../Account/SignIn';
import DashDrawer from './Drawer/DashDrawer'

export const Dashboard = () => {

  const navigate = useNavigate();
  const [auth, setAuth] = React.useState(true);

  const [dataView, setDataView] = React.useState(0);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleViewClick = (event) => {
    setDataView(event)
  }

  const defaultView = <DataTable></DataTable>
  const [dashboardView, setDashboardView] = React.useState(defaultView);

  return (
    <Box sx={{flexGrow:1, display:'flex'}}>
      {auth && (
          <Container sx={{display:'flex', flexGrow:1, flexFlow:'column'}}>
            <DashDrawer user="User_0">
              <Container >
                <div>{dashboardView}</div>
              </Container>
            </DashDrawer>
          </Container>
      )}
      {!auth && (
        <SignIn></SignIn>
      )}

    </Box>
  )
}
