import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../utils/constants";

const initUpdateService = {
    image: '',
    name: '',
    description: '',
    price: '',
    duration: ''
}

const EditServices = () => {
    const [updateServiceForm, setUpdateServiceForm] = useState(initUpdateService)
    const navigate = useNavigate()

    const handleUpdateForm = (fieldTitle, value) => {
        setUpdateServiceForm(prevState => ({...prevState, [fieldTitle]: value}))
    }

    const { serviceId } = useParams();

    useEffect(() => {
        axios.get(`${API_URL}/api/servicios/${serviceId}`)
        .then(response => {
            const oneService = response.data;
            handleUpdateForm('name', oneService.name)
            handleUpdateForm('price', oneService.price)
            handleUpdateForm('image', oneService.image)
            handleUpdateForm('description', oneService.description)
            handleUpdateForm('duration', oneService.duration)
        })
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.put(`${API_URL}/api/servicios/${serviceId}`, updateServiceForm)
        navigate("/servicios")
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card sx={{ maxWidth: 345, padding: '20px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)' }}>
            <form onSubmit={handleSubmit}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Aca puedes editar el proyecto
                    </Typography>
                    <label style={{ display: 'block', marginTop: '10px' }}>Nombre del servicio:</label>
                    <input 
                    type='text' 
                    name='name'
                    value={updateServiceForm.name}
                    onChange={(e) => handleUpdateForm('name', e.target.value)} 
                    style={{ width: '100%', padding: '5px' }} />
                    <label style={{ display: 'block', marginTop: '10px' }}>Precio:</label>
                    <input 
                    type='number' 
                    name='price' 
                    value={updateServiceForm.price}
                    onChange={(e) => handleUpdateForm('price', e.target.value)} 
                    style={{ width: '100%', padding: '5px' }} />
                    <label style={{ display: 'block', marginTop: '10px' }}>Foto:</label>
                    <input 
                    type='text' 
                    name='image' 
                    value={updateServiceForm.image}
                    onChange={(e) => handleUpdateForm('image', e.target.value)} 
                    style={{ width: '100%', padding: '5px' }} />
                    <label style={{ display: 'block', marginTop: '10px' }}>Descripcion:</label>
                    <textarea
                    type="text"
                    name="description"
                    value={updateServiceForm.description}
                    onChange={(e) => handleUpdateForm('description', e.target.value)} 
                    style={{ width: '100%', padding: '5px' }}
                    />
                    <label style={{ display: 'block', marginTop: '10px' }}>Duración del servicio:</label>
                    <input 
                    type='number' 
                    name='duration' 
                    value={updateServiceForm.duration} 
                    onChange={(e) => handleUpdateForm('duration', e.target.value)} 
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

export default EditServices;