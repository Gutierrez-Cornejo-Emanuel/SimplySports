import { Box, Container } from '@mui/system'
import React from 'react'
import DataTable from './Table/DataTable';
import { SignIn } from '../../Account/SignIn';
import DashDrawer from './Drawer/DashDrawer'
import { Practice } from './Practice/Practice';
// import { Grid } from '@mui/material';
// import {TableFilters} from './Table/TableFilters'
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  // TODO: Move auth state to lounge or index and use top to bottom data transfer
  const [auth, setAuth] = React.useState(true);

  const [dashboardMain, setDashboardMain] = React.useState(<DataTable tableFilter={0}></DataTable>);
  const [dashboardView, setDashboardView] = React.useState('datatable');

  const resetDash = () => {
    setDashboardMain(<DataTable tableFilter={0}></DataTable>);
    setDashboardView('datatable')
  }

  const handleFilterUpdate = (event) => {
    setDashboardMain(<DataTable tableFilter={event}></DataTable>)
  }

  const handleActionClick = (event) => {
    setDashboardView('practice')
    setDashboardMain(<Practice practiceType={event} setDashView={resetDash}></Practice>)
  }

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <Box sx={{flexGrow:1, display:'flex'}}>
      {auth && dashboardView === "datatable" && (
          <Container sx={{display:'flex', flexGrow:1, flexFlow:'column'}}>
            <DashDrawer user="User_0" 
            setFilterUpdate={handleFilterUpdate}
            updateAction={handleActionClick}>
              <Container >
                <div>{dashboardMain}</div>
              </Container>
            </DashDrawer>
          </Container>
      )}
      {auth && dashboardView === "practice" && (
        <Container sx={{display:'flex', flexGrow:1, flexFlow:'column'}} disableGutters>
          {dashboardMain}
        </Container>
      )}
      {!auth && (
        <SignIn></SignIn>
      )}

    </Box>
  )
}