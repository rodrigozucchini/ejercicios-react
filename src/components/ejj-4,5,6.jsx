import React, { useState, useEffect } from 'react'


function Clock4() {
      // Estado privado del component
      const valorInicial = {
         // Se genera una fecha como estado inicial del componente
         fecha: new Date(),
         edad: 0,
         nombre: "Martín",
         apellidos: "San José"
      };

    const [state, setState] = useState(valorInicial);

    function tick(){
        setState({
           edad : state.edad +1,
            fecha : new Date(),
           }
        )};
    
    useEffect(() => {
        const timerID = setInterval (
            () => tick(), 1000
         );
        return () => {
            clearInterval (timerID);
        };
    });

      return (
         <div>
         <h2>
         Hora Actual:
         {state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{state.nombre} {state.apellidos}</h3>
         <h1>Edad: {state.edad}</h1>
         </div>
      )
}
export default Clock4;