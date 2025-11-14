// Este será uno de los componentes que usará el contexto creado

import { FaMoon, FaSun } from "react-icons/fa";

import { useContext } from "react"
import { TemaContext } from "./TemaContext" // -> Importamos el contexto global creado en TemaContext.jsx 
                                            // de lo constrario, no podremos hacer el cambio de temas

export function Pagina(){
    const {oscuro, alternarTema} = useContext(TemaContext)

    return(<>
        <div>
            <h1 style={{"fontFamily": "Roboto, sans-serif"}}>
                {oscuro ? "Modo Oscuro" : "Modo Claro"}
                {oscuro ? <FaSun /> : <FaMoon />}
            </h1>

            <button className="btn" onClick={alternarTema}>  
                Cambiar Tema
            </button>

        </div>
    </>)
}