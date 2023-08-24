import * as React from 'react';
import founderImage from '../img/founder.jpg'
import { Card, CardContent } from '@mui/material';
import ReserveNow from '../components/ReserveNow';

export default function Home() {
  return (
    <>
    <ReserveNow/>
    <Card sx={{margin: 2}}>
        <CardContent>
            <img src={founderImage} alt={'founderImage'} width={280}/>
        </CardContent>
    </Card>
    <Card sx={{margin: 2}}>
        <CardContent>
            <h3>Quienes somos?</h3>
            <h2>Je blush</h2>
            <p style={{textAlign: 'left'}}>Somos un exclusivo estudio especializado en la transformación de miradas. Mediante procedimientos en cejas, pestañas y utilizando productos de la más alta calidad lograremos darle a tu rostro ese Glow que te hará lucir increíble todo el tiempo.
    <br />
    <br />
¡Nuestro objetivo es ofrecerte una experiencia completa de belleza y cuidado personal!</p>
        </CardContent>
    </Card>
    </>
  );
}