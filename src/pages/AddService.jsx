import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { API_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";


const initService = {
    image: '',
    name: '',
    description: '',
    price: '',
    duration: ''
}

const AddService = () => {

    const [ serviceStateForm, setServiceForm ] = useState(initService); 
    const navigate = useNavigate();

    const updateServiceForm = (nameField, value) => {
        setServiceForm(prevState => ({...prevState, [nameField]: value}))
    }

    const handleSubmit = async (e) => {   
        e.preventDefault()
        try {
            await axios.post(`${API_URL}/api/servicios`, serviceStateForm)
            setServiceForm(initService)
            navigate('/servicios')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card sx={{ maxWidth: 345, padding: '20px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)' }}>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Añade un nuevo servicio!
                        </Typography>
                        <label style={{ display: 'block', marginTop: '10px' }}>Nombre del servicio:</label>
                        <input 
                        type='text' 
                        name='name'
                        value={serviceStateForm.name}
                        onChange={(e) => updateServiceForm('name', e.target.value)}
                        placeholder="Microblading" 
                        style={{ width: '100%', padding: '5px' }} />
                        <label style={{ display: 'block', marginTop: '10px' }}>Precio:</label>
                        <input 
                        type='number' 
                        name='price' 
                        placeholder="300 (No incluyas simbolos $ ni . puntos)" 
                        value={serviceStateForm.price}
                        onChange={(e) => updateServiceForm('price', e.target.value)} 
                        style={{ width: '100%', padding: '5px' }} />
                        <label style={{ display: 'block', marginTop: '10px' }}>Foto:</label>
                        <input 
                        type='text' 
                        name='image' 
                        value={serviceStateForm.image}
                        onChange={(e) => updateServiceForm('image', e.target.value)} 
                        placeholder="Inserta la URL de tu foto" 
                        style={{ width: '100%', padding: '5px' }} />
                        <label style={{ display: 'block', marginTop: '10px' }}>Descripcion:</label>
                        <textarea
                        type="text"
                        name="description"
                        value={serviceStateForm.description}
                        onChange={(e) => updateServiceForm('description', e.target.value)} 
                        style={{ width: '100%', padding: '5px' }}
                        />
                        <label style={{ display: 'block', marginTop: '10px' }}>Duración del servicio:</label>
                        <input 
                        type='number' 
                        name='duration' 
                        value={serviceStateForm.duration} 
                        placeholder="3 numero de horas que dura el servicio" 
                        onChange={(e) => updateServiceForm('duration', e.target.value)} 
                        style={{ width: '100%', padding: '5px' }} />
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
