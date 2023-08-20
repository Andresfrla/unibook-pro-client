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
            <AppBar>
                <Toolbar>
                        <WhatshotIcon/> 
                        <Typography>Je blush </Typography>

                    {isMatch ?(
                        <>
                        <DrawerComp/>
                        </>
                    ) : (
                        <>
                    <Tabs 
                    sx={{marginLeft: 'auto'}}
                    textColor='inherit' 
                    value={value} 
                    onChange={(e, value) => setValue(value)} 
                    indicatorColor='secondary'>
                        <Tab label='Servicios'/>
                        <Tab label='Acerca de'/>
                        <Tab label='Reserva ahora!'/>
                    </Tabs>

                    <Button sx={{marginLeft: 'auto'}}variant="contained"><PersonOutlineIcon/> Login</Button>
                    <Button variant="contained" sx={{marginLeft: '10px'}}><AssignmentIcon/> Sign up</Button>
                        </>
                    )
                    }


                </Toolbar>
                
            </AppBar>
        </React.Fragment>
    )
}

export default Navbar;