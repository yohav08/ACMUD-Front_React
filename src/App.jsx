import { useState, useEffect } from 'react';
import './App.css';

import { Btn_1 } from './components/btn_1.jsx';
import { Btn } from './components/btn.jsx';


import { useCounter } from './hooks/useCounter';


import { FaPlay, FaPause, FaRedoAlt, FaForward, FaBackward } from "react-icons/fa";
import { BiBorderOuter } from 'react-icons/bi';


import {TemaProvider} from './components/TemaProvider.jsx'
import {Pagina} from './components/Pagina.jsx'


function App() {
  // usamos el hook actualizado con toggle
  // Counter con adelantar y atrasar - Tarea 2
  const { count, running, toggle, reiniciar, adelantar, atrasar } = useCounter(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  // Counter - Tarea 1
  const[counter1, setCount] = useState(0);
  const  increment = () => {
    setCount(counter1+1);
  }
  const  decrement = () => {
    setCount(counter1-1);
  }


  return (
    <>

        {/* TemaProvider y Pagina - Tarea 3 */}
        <TemaProvider> 
          <Pagina/>
        </TemaProvider>
      

        {/* Counter - Tarea 2 */}
        <p class='counter'>{count}</p>

        <Btn className="tam" onClick={atrasar}> <FaBackward /> <br />Atrasar -5sg </Btn> &nbsp;
        <Btn onClick={toggle}>
          {running ? <FaPause /> : <FaPlay />}<br />
          {running ? "Pausar" : "Iniciar"}
        </Btn> &nbsp;
        <Btn className="tam" onClick={adelantar}><FaForward /> <br />Adelantar +5sg</Btn> <br/> <br/>
        <Btn className="tam" onClick={reiniciar}><FaRedoAlt /><br />Reiniciar</Btn>
        
        {/* Counter - Tarea 1  */}

        <p class='counter'>{counter1}</p>
        <Btn_1 onClick={increment} name="Increment"/>&nbsp;
        <Btn_1 onClick={decrement} name="Decrement"/>
        

    </>
  );
}

export default App;
