// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Btn} from './components/btn.jsx'

import './App.css'
import { useState, useEffect } from 'react'


function App() {
  const[count, setCount] = useState(0);

  const  increment = () => {
    setCount(count+1);
  }
  const  decrement = () => {
    setCount(count-1);
  }

  useEffect(() => {
    document.title = count;
  }), [count];

  return (<>

    <Btn onClick={increment} name="Increment"/>&nbsp;
    <Btn onClick={decrement} name="Decrement"/>
    <p>{count}</p>

  </>)
}

export default App
