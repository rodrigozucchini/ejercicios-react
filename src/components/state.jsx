// EJEMPLO DE USO DE useState
import React, { useState } from 'react';

const Ejemplo1 = () => {
    const valorInicial = 0;

    const [componente1, setComponente1] = useState(valorInicial);
    
    function incrementarContador() {
        setComponente1(componente1 + 1)
    }


    const valorInicialPersona = {
        name: "Rodrigo",
        apellido: "Zucchini"
    };

    const [componente1s, setComponente1s] = useState(valorInicialPersona);
    
    function incrementarContadors() {
        setComponente1s({
            name: "Angel",
            apellido: "Zuculini"
        })
    }

    return (
        <div>
            <h1>Renderizar lo de los useState</h1>
            <h2>{componente1}</h2>
            <button onClick={incrementarContador}>actualizar</button>
            <h1>{componente1s.name}</h1>
            <h1>{componente1s.apellido}</h1>
            <button onClick={incrementarContadors}>actualizar</button>
        </div>
    );
}

export default Ejemplo1 ;




