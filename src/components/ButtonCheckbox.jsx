import { Button, Checkbox } from "@mui/material";
import React from "react";

const ButtonCheckbox = React.forwardRef(function ButtonCheckbox(props, ref) {
    return (
      <Checkbox
        ref={ref}
        {...props}
        icon={<Button variant="contained">{props.label}</Button>}
        checkedIcon={<Button variant="contained">{props.label}</Button>}
        sx={{
          '& .MuiIconButton-root': {
            padding: 0,
          },
          '& .MuiSvgIcon-root': {
            display: 'none',
          },
        }}
      />
    );
  });
  
  export default ButtonCheckbox;
  