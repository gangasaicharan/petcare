import './App.css';
import Header from './components/Header';
import Greeting from './components/Greeting';
import AppointmentColumn from './components/AppointmentColumn';
import VetCard from './components/VetCard';
import VetColumn from './components/VetColumn';

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <div className="columns">
        <AppointmentColumn type="today" />
        <AppointmentColumn type="pending" />
        <VetColumn />
      </div>
    </div>
  );
}

export default App;
