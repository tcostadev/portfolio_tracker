import './App.css';
import Header from './components/Header/Header.js'
import Details from './components/Details/Details.js'
import Moviments from './components/Moviments/Moviments.js'
import { useState } from 'react'

function App() {
  const currency = "€";

  const [moviments, setMoviments] = useState(
    [
      {
        id : 1,
        moviment : "Restaurante",
        date : "2021-05-18 10:00",
        type : "expense",
        value: 50.5
      },
      {
        id : 2,
        moviment : "Combustivel",
        date : "2021-05-10 15:00",
        type : "expense",
        value: 40
      },
      {
        id : 3,
        moviment : "Salário",
        date : "2021-05-05 18:00",
        type : "income",
        value: 1000
      }
    ]
  )
  
  return (
    <div className="App">
      <Header/>
      <Details MonthlyExp={100} AnualExp={1000} MonthlyInc={2000} AnualInc={12000} currency={currency}/>
      <Moviments moviments={moviments} currency={currency}/>
    </div>
  );
}

export default App;
