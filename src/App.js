import logo from './logo.svg';
import './App.css';
import { getCountries } from './services/client';
import Main from './components/Main/Main';

function App() {
  const countries = getCountries();
  console.log(countries);
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
