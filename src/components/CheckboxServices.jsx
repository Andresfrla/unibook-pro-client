import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AuthContext } from '../context/auth.context';
import axios from 'axios';
import ServicesService from '../services/services.service';

export default function CheckboxServices({ checkedServices, setCheckedServices }) {
  const [services, setServices] = React.useState([]);

  const { user } = React.useContext(AuthContext)
  const { _id: userId } = user

  React.useEffect(() => {
    fetchServices()
  }, [])
  
  const fetchServices = async () => {
    try {
      const response = await ServicesService.getAllServices(`/api/servicios`);
      const servicesData = response.data; 
      
      setServices(servicesData);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <FormGroup>
      {services.map((service) =>
        <FormControlLabel
        key={service._id}  
        control={<Checkbox checked={checkedServices.includes(service._id)}/>}
        label={`${service.name} (duracion: ${service.duration} Hora) $${service.price}`} />
      )}
    </FormGroup>
  );
}
