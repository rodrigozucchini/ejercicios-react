import React, { useEffect, useRef, useState } from 'react'

const Ejemplo2 = () => {
  
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
  
    const miRef = useRef();

    function incrementarContador1 () {
        setContador1(contador1 + 1)
    }

    function incrementarContador2 () {
        setContador2(contador2 + 1)
    }

    useEffect(() => {
        console.log("cambio en el estado del componente");
        console.log("Monstrando a referencia del DOM");
        console.log(miRef);
    },[contador1, contador2]);

    return (
    <div>
        <h1>Empezamos</h1>
        <h2>{contador1}</h2>
        <button onClick={incrementarContador1}>actualizar</button>
        <h2>{contador2}</h2>
        <button onClick={incrementarContador2}>actualizar</button>
        <h4 ref={miRef}>
            Ejemplo de elemento referenciado
        </h4>
    </div>
  )
}



export default Ejemplo2;