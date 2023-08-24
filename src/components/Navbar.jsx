import * as React from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import DrawerComp from './DrawerComp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Navbar = () => {
    const [value, setValue] = React.useState();

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <React.Fragment>
            <AppBar position="sticky" elevation={0}>
                <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: 'black' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <WhatshotIcon sx={{ marginRight: '10px', fontSize: '2rem', color: 'white' }} />
                        <Typography variant="h6" sx={{ color: 'white' }}>Je blush</Typography>
                    </div>
                    {isMatch ? (
                        <DrawerComp />
                    ) : (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Tabs
                                value={value}
                                onChange={(e, value) => setValue(value)}
                                textColor="inherit"
                                indicatorColor="secondary"
                            >
                                <Tab label="Servicios" />
                                <Tab label="Acerca de" />
                                <Tab label="Reserva ahora!" />
                            </Tabs>
                            <Button variant="contained" startIcon={<PersonOutlineIcon />} sx={{ marginLeft: '10px', backgroundColor: '#E1306C', fontWeight: 'bold' }}>Login</Button>
                            <Button variant="contained" startIcon={<AssignmentIcon />} sx={{ marginLeft: '10px', fontWeight: 'bold' }}>Sign up</Button>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Navbar;