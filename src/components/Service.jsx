import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { API_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

export default function Service() {
  const [services, setServices] = React.useState([]);

  const getAllServices = async () => {
    try{
      const response = await axios.get(`${API_URL}/api/servicios`)
      setServices(response.data) 
    } catch {

    }
  }

  React.useEffect(() => {
    getAllServices()
  }, [])
  
  return (
    <div >
      {services.map(service => 
        <div key={service._id}>
              <Card sx={{ maxWidth: 345, margin: 5 }}>
      <CardMedia
        sx={{ height: 140}}
        image={service.image}
        title={service.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {service.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {service.description}
        <br />
        $ {service.price}
        </Typography>
        </CardContent>
          <CardActions>
            <Button 
            size="small"
            component={Link}
            to={`/servicios/${service._id}`}
            >Mas info</Button>
          </CardActions>
          </Card>
        </div>
        )}

    </div>
  );
}
