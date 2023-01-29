import * as React from 'react';
import Drawer from '@mui/material/Drawer';
// import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {sports, leagues, teams} from './const/navbarListItems';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const Navbar = () => {
    const drawerWidth = 220;
  return (
    <Drawer
        sx={{
        width:drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: 'auto',
        },
        }}
        variant="permanent"
        anchor="left"
    >
        {/* <Toolbar /> */}
        <Divider />
            {sports.map((sport) => ( 
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id={sport.id}
                    >
                    <Typography>{sport.label}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    {leagues.map((league) => (
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id={league.id}
                            >
                            <Typography>{league.label}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <List>
                                {teams.map((team) => (
                                    <ListItem key={team.id} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={team.label} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                            </AccordionDetails>
                        </Accordion>
                    ))}

                    </AccordionDetails>
                </Accordion>
                ))}

        <Divider />
    </Drawer>
  )
}
