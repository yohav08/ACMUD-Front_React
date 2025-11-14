import { useState, useEffect } from "react";
import { TemaContext } from "./TemaContext"; 

export function TemaProvider({ children }){
    const [oscuro, setOscuro] = useState(false)
    
    // Efecto para aplicar la clase al body
    useEffect(() => {
        if (oscuro) {
            document.body.className = 'oscuro';
        } else {
            document.body.className = 'claro';
        }
    }, [oscuro]);
    
    const alternarTema = ()=>{
        setOscuro(!oscuro);
    }
    
    return(<>
        <TemaContext.Provider value={{ oscuro, alternarTema }}>
            {children} 
        </TemaContext.Provider>
    </>);
}