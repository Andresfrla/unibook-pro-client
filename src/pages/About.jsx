import { Box, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ReserveNow from "../components/ReserveNow";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),  
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: theme.spacing(2), 
  }));

const About = () => {

    return (
        <>
        <ReserveNow/>
        <Box marginTop={2}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Item>
                        <h3>Misión</h3>
                        <p>En Je Blush, nuestra misión es realzar la belleza natural de cada cliente y clienta a través de técnicas especializadas en cejas y pestañas. Nos comprometemos a proporcionar servicios excepcionales y resultados sobresalientes respaldados por la experiencia de nuestro talentoso equipo y certificaciones internacionales. También buscamos educar y capacitar a través de nuestra academia online, compartiendo conocimientos y técnicas de vanguardia. Nos esforzamos por ofrecer una experiencia completa de belleza, desde el cuidado personalizado en nuestro estudio hasta la venta de productos cuidadosamente seleccionados para complementar y mantener tu belleza natural.</p>
                    </Item>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Item>
                        <h3>Conoce a nuestra fundadora</h3>
                        <p>Con más de 8 años de experiencia y certificaciones internacionales en el mundo de las cejas y pestañas, Su pasión por realzar la belleza natural de cada persona se refleja en cada servicio que ofrecemos en nuestro estudio.</p>
                        <br />
                        <p>Jennyfer es reconocida por su habilidad excepcional en el diseño de cejas y la aplicación de extensiones de pestañas, creando resultados impresionantes que resaltan los rasgos únicos de cada cliente. Su enfoque personalizado y su atención al detalle han ganado la lealtad de numerosos clientes satisfechos.</p>
                    </Item>
                </Grid>
            </Grid>
        </Box>  
        </>
    )
}

export default About;
