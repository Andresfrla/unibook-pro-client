import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import '@mui/material/styles';
import Schedule from './pages/Schedule';
import Services from './pages/Services';
import { Route, Routes } from 'react-router-dom';


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
      </Routes>
    </div>
  );
}

export default App;
