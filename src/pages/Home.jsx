import * as React from 'react';
import founderImage from '../img/founder.jpg'
import { Card, CardContent, Grid, useMediaQuery, useTheme } from '@mui/material';
import ReserveNow from '../components/ReserveNow';
import logo from '../img/logobnw.png'

export default function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { isLoggedIn } = React.useContext(AuthContext);

    
    return (
        <>  
            {
              isLoggedIn &&  <ReserveNow />
            }
            <Card sx={{ margin: 2 }}>
                <CardContent>
                    <Grid container spacing={isMobile ? 2 : 4}>
                        <Grid item xs={12} md={6}>
                            <img src={founderImage} alt={'founderImage'} width={280} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <h3>Quienes somos?</h3>
                            <img src={logo} width='200px' alt='logo'/>
                            <p style={{ textAlign: 'left' }}>Somos un exclusivo estudio especializado en la transformación de miradas. Mediante procedimientos en cejas, pestañas y utilizando productos de la más alta calidad lograremos darle a tu rostro ese Glow que te hará lucir increíble todo el tiempo.
                            <br />
                            <br />
                            ¡Nuestro objetivo es ofrecerte una experiencia completa de belleza y cuidado personal!</p>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}
