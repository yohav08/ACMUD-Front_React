// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import {Btn} from './components/btn.jsx'

import './App.css'
import { useState } from 'react'

function App() {
  const[count, setCount] = useState(0);

  const  increment = () => {
    setCount(count+1);
  }
  const  decrement = () => {
    setCount(count-1);
  }

  return (<>
    <button onClick={increment}>Incremento</button>
    <button onClick={decrement}>Decremento</button>
    <p>valor:{count}</p>


  </>)
}

export default App
