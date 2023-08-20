import './App.css';
import Navbar from './components/Navbar';
import ReserveNow from './components/ReserveNow';
import Service from './components/Service';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ReserveNow/>
      <Service/>
    </div>
  );
}

export default App;
