import React, { useState } from 'react';


const Elemento = () => {


let rojo = [Math.floor(Math.random() * (255-0)) + 0];
let azul = [Math.floor(Math.random() * (255-0)) + 0];
let verde = [Math.floor(Math.random() * (255-0)) + 0];

const colores = {
    display: "flex",
    width: "255px",
    height: "255px",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "black"
}

const [pintar, setPintar] = useState(colores);

    function nuevosColores() {
        setPintar({
            display: "flex",
            width: "255px",
            height: "255px",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            backgroundColor: `rgb(${rojo},${azul},${verde})`
        })
    }


    return (
        <div>
            <div style={pintar} onMouseOver={()=>nuevosColores()} onDoubleClick={() => {
                    console.log("Botón pulsado")
                    setPintar(colores)}}>
                Empecemos
            </div>
        </div>
    );
}

export default Elemento;
