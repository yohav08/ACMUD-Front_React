import { useEffect } from 'react';
import { Btn } from './components/btn.jsx';
import './App.css';
import { useCounter } from './hooks/useCounter';


import { FaPlay, FaPause, FaRedoAlt, FaForward, FaBackward } from "react-icons/fa";
import { BiBorderOuter } from 'react-icons/bi';


import {TemaProvider} from './components/TemaProvider.jsx'
import {Pagina} from './components/Pagina.jsx'


function App() {
  // usamos el hook actualizado con toggle
  const { count, running, toggle, reiniciar, adelantar, atrasar } = useCounter(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, [count]);

  return (
    <>

        <TemaProvider> 
          <Pagina/>
        </TemaProvider>
      

        
         <p class='counter'>{count}</p>

        <Btn className="tam" onClick={atrasar}> <FaBackward style={BiBorderOuter}/> <br />Atrasar -5sg </Btn> &nbsp;
        <Btn onClick={toggle}>
          {running ? <FaPause /> : <FaPlay />}<br />
          {running ? "Pausar" : "Iniciar"}
        </Btn> &nbsp;
        <Btn className="tam" onClick={adelantar}><FaForward /> <br />Adelantar +5sg</Btn> <br/> <br/>
        <Btn className="tam" onClick={reiniciar}><FaRedoAlt /><br />Reiniciar</Btn>
        
    </>
  );
}

export default App;
