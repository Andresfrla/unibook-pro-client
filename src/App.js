import './App.css';
import Navbar from './components/Navbar';
import ReserveNow from './components/ReserveNow';
import Service from './components/Service';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import '@mui/material/styles';
import Schedule from './pages/Schedule';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ReserveNow/>
      <Service/>
      <Home/>
      <Signup/>
      <Login/>
      <Schedule/>
    </div>
  );
}

export default App;
