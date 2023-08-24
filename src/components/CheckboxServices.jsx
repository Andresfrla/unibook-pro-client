import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxServices() {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Microblagin (2 horas) $2.600" />
      <FormControlLabel control={<Checkbox />} label="Henna (1 hora) $800" />
      <FormControlLabel control={<Checkbox />} label="Nanoblading (3 horas) $3.600" />
    </FormGroup>
  );
}