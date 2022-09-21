import logo from './logo.svg';
import './App.css';
import { getCountries } from './services/client';
import Main from './components/Main/Main';
import { useState } from 'react';


function App() {
  const [filterContinent, setFilterContinent] = useState('all');
  return (
    <div className="App">
      <Main filterContinent={filterContinent} setFilterContinent={setFilterContinent} />
    </div>
  );
}

export default App;
