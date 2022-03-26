import React, { useState, useContext } from 'react';

const miContexto = React.createContext(null);

const Componente1 = () => {

    const state = React.useContext(miContexto);

    return (
        <div>
            <h1>
                El toke es: {state.token}
            </h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {
    const state = useContext(miContexto);
    
    return (
        <div>
            <h2>
                Nombre es: {state.cantidad}
            </h2>
        </div>
    );
}


export default function MiComponenteConContexto() {
    
    const estadoInicial = {
        token: 123456,
        cantidad: 1
    }
  
    const [data, setData] = useState(estadoInicial);

    function actualizarData() {
        setData({
            token: 695846,
            cantidad: data.cantidad + 1
        });
    } 

    return (
    <div>
        <miContexto.Provider value={data}>
            <Componente1></Componente1>
            <button onClick={actualizarData}>Actualizar</button>
        </miContexto.Provider>
    </div>
  )
}



export { Componente1 };
export { Componente2 };
