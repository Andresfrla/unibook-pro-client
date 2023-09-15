import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import ServicesService from '../services/services.service';

export default function CheckboxServices({ checkedServices, setCheckedServices }) {
  const [services, setServices] = React.useState([]);

  React.useEffect(() => {
    fetchServices()
  }, [])
  
  const handleCheckboxChange = (serviceId, isChecked) => {
    if (isChecked) {
      setCheckedServices(prev => [...prev, serviceId]); // Add the service ID if checked
      console.log("🚀 ~ file: CheckboxServices.jsx:22 ~ handleCheckboxChange ~ serviceId:", serviceId)
    } else {
      setCheckedServices(prev => prev.filter(id => id !== serviceId)); // Remove the service ID if unchecked
    }
  }

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
        onChange={(e) => handleCheckboxChange(service._id, e.target.checked)}
        label={`${service.name} (duracion: ${service.duration} Hora) $${service.price}`} />
      )}
    </FormGroup>
  );
}
