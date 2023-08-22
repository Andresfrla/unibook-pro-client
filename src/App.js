import './App.css';
import Navbar from './components/Navbar';
import ReserveNow from './components/ReserveNow';
import Service from './components/Service';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ReserveNow/>
      <Service/>
      <Home/>
    </div>
  );
}

export default App;
