import './App.css';
import Header from './components/Header/Header.js'
import Details from './components/Details/Details.js'
import Movements from './components/Movements/Movements.js'
import { useState } from 'react'

function App() {
  const currency = "€";

  const [movements, setMovements] = useState(
    [
      {
        id : 1,
        movement : "Restaurante",
        date : "2021-05-18 10:00",
        type : "expense",
        value: 50.5
      },
      {
        id : 2,
        movement : "Combustivel",
        date : "2021-05-10 15:00",
        type : "expense",
        value: 40
      },
      {
        id : 3,
        movement : "Salário",
        date : "2021-05-05 18:00",
        type : "income",
        value: 1000
      }
    ]
  )
  
  return (
    <div className="App">
      <Header/>
      <Details MonthlyExp={100} AnnualExp={1000} MonthlyInc={2000} AnnualInc={12000} currency={currency}/>
      <Movements movements={movements} currency={currency}/>
    </div>
  );
}

export default App;
