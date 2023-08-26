import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Link } from "react-router-dom";

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    return (
        <React.Fragment>
            <Drawer open={openDrawer}
            onClose={()=>setOpenDrawer(!openDrawer)}>
                <List>
                    <ListItem component={Link} to="/login">
                        <ListItemIcon>
                            <ListItemText><PersonOutlineIcon/> Login</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem component={Link} to="/signup">
                        <ListItemIcon>
                            <ListItemText><AssignmentIcon/> Sign up</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <hr/>

                    <ListItem component={Link} to="/servicios">
                        <ListItemIcon>
                            <ListItemText><AirlineSeatFlatIcon/> Servicios</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem component={Link} to="/acerca-de">
                        <ListItemIcon>
                            <ListItemText><LocalMallIcon/> Acerca de</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem component={Link} to="/reserva-ahora">
                        <ListItemIcon>
                            <ListItemText><AddBusinessIcon/> Reserva ahora!</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton sx={{color: 'white', marginLeft: 'auto'}} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon/>
            </IconButton>
        </React.Fragment>
    )
}

export default DrawerComp;