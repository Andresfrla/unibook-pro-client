import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useState } from "react";

const initService = {
    image: '',
    name: '',
    description: '',
    price: '',
    duration: ''
}

const AddService = () => {

    const [ serviceStateForm, setServiceForm ] = useState(initService); 

    const updateServiceForm = (nameField, value) => {
        setServiceForm({...serviceStateForm,[nameField]:value});
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card sx={{ maxWidth: 345, padding: '20px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)' }}>
                <form>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Añade un nuevo servicio!
                        </Typography>
                        <label style={{ display: 'block', marginTop: '10px' }}>Nombre del servicio:</label>
                        <input type='text' name='name' style={{ width: '100%', padding: '5px' }} />
                        <label style={{ display: 'block', marginTop: '10px' }}>Precio:</label>
                        <input type='number' name='price' style={{ width: '100%', padding: '5px' }} />
                        <label style={{ display: 'block', marginTop: '10px' }}>Foto:</label>
                        <input type='text' name='image' style={{ width: '100%', padding: '5px' }} />
                        <label style={{ display: 'block', marginTop: '10px' }}>Descripcion:</label>
                        <textarea
                            type="text"
                            name="description"
                            style={{ width: '100%', padding: '5px' }}
                        />
                        <label style={{ display: 'block', marginTop: '10px' }}>Duración del servicio:</label>
                        <input type='text' name='duration' style={{ width: '100%', padding: '5px' }} />
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button type="submit" sx={{ marginLeft: '10px', backgroundColor: '#E1306C', fontWeight: 'bold', color: "white" }}>Guardar</Button>
                    </CardActions>
                </form>
            </Card>
        </div>
    )
}

export default AddService;
