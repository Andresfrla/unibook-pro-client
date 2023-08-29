import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import '@mui/material/styles';
import Schedule from './pages/Schedule';
import Services from './pages/Services';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import ServiceDetail from './pages/ServiceDetail';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/reserva-ahora' element={<Schedule/>}/>
        <Route path='/servicios' element={<Services/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/acerca-de' element={<About/>}/>
        <Route path='/servicios/:serviceId' element={<ServiceDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
