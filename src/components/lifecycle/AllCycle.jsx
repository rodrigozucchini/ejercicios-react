import React, { useEffect } from 'react';

const Allcycle = () => {

    useEffect(() => {
        console.log("Componente creado")

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`;
            console.log("actualizacion del componente");
        }, 1000);

        return () => {
            console.log("Componente va a desaparecer")
            document.title = "Tiempo detenido";
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default Allcycle;
