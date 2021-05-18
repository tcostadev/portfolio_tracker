import './App.css';
import Header from './components/Header/Header.js'
import Details from './components/Details/Details.js'
import { useState } from 'react'

function App() {
  const [moviments, setmoviments] = useState([])
  
  return (
    <div className="App">
      <Header/>
      <Details/>
    </div>
  );
}

export default App;
