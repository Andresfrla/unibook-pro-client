import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import microblading from '../img/microblading.jpg'

export default function Service() {
  const [services, setServices] = React.useState([]);

  return (
    <div >
      {services.map(service => 
        <div key={service._id}>
          
        </div>
        )}
    <Card sx={{ maxWidth: 345, margin: 5 }}>
      <CardMedia
        sx={{ height: 140}}
        image={microblading}
        title="microblading"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          NanoBlading
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Obtén cejas perfectas y naturales con el microblading. 
        $ 2.600
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
        size="small"
        to=""
        >Mas info</Button>
      </CardActions>
    </Card>
    </div>
  );
}
