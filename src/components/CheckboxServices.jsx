import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxServices({ checkedServices, setCheckedServices }) {
  const [services, setServices] = React.useState([]);

  const { user } = useContext(AuthContext)
  const { _id: userId } = user

  React.useEffect(() => {
    fetchServices()
  }, [])
  
  const fetchServices = async () => {
    try {
      const response = await servicesService.get(`/api/services/${userId}`);
      const services = response.data;
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <FormGroup>
      {services.map((service) =>
        <FormControlLabel
          control={
          <Checkbox checked={checkedServices.includes(service.id)}
          />}
          label={service.name} />
      )}
    </FormGroup>
  );
}