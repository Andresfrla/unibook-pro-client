import * as React from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import DrawerComp from './DrawerComp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'
import { AuthContext } from '../context/auth.context';

const Navbar = () => {
    const [value, setValue] = React.useState();

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const { isLoggedIn } = React.useContext(AuthContext);
    
    return (
        <React.Fragment>
            <AppBar position="sticky" elevation={0}>
                <Toolbar sx={{ justifyContent: 'space-between', backgroundColor: 'black' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', margin: '15px' }}>
                        <img src={logo} width='100px' alt='logo'/>
                    </Link>
                    {isMatch ? (
                        <DrawerComp />
                    ) : (
                        <div style={{ display: 'flex', alignItems: 'center'}}>
                            <div style={{ margin: 'auto' }}>
                            <Tabs
                                value={value}
                                onChange={(e, value) => setValue(value)}
                                textColor="inherit"
                                indicatorColor="secondary"
                            >
                                <Tab label="Servicios" value="/servicios" to="/servicios" component={Link}/>
                                <Tab label="Acerca de" value="/acerca-de" to="acerca-de" component={Link}/>
                                <Tab label="Reserva ahora!" value="/reserva-ahora" to="/reserva-ahora" component={Link}/>
                                <Tab label="Añadir servicio" value="/añadir-servicio" to="/añadir-servicio" component={Link}/>
                            </Tabs>
                            </div>

                            {
                                isLoggedIn && (
                                    <>
                                        <Button 
                                        variant="contained" 
                                        value="/login"
                                        to='/login'
                                        component={Link}
                                        startIcon={<PersonOutlineIcon />} 
                                        >Logout</Button>
                                    </>
                                ) 
                            }

                            {
                                !isLoggedIn  && (
                                    <>
                            <Button 
                            variant="contained" 
                            value="/login"
                            to='/login'
                            component={Link}
                            startIcon={<PersonOutlineIcon />} 
                            >Login</Button>
                            <Button 
                            variant="contained"
                            value="/signup"
                            to='/signup'
                            component={Link}
                            startIcon={<AssignmentIcon />} 
                            sx={{ marginLeft: '10px', backgroundColor: '#E1306C', fontWeight: 'bold', color: "white" }}>Sign up</Button>                                    
                                    </>
                                )
                            }

                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default Navbar;