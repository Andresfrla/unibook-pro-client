import { Calendar } from '@carbon/icons-react';
import './App.css';
import Navbar from './components/Navbar';
import ReserveNow from './components/ReserveNow';
import Service from './components/Service';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ReserveNow/>
      <Service/>
      <Home/>
      <Signup/>
      <Login/>
      <Calendar/>
    </div>
  );
}

export default App;
