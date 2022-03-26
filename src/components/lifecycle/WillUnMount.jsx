//Ejemplo de uso del metodo componentWillUnMount para componente clase y Hooks para componente funcional
//Cuando el componente va a desaparecer

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log("Componte antes de que el comportamiento desaparezca")
    }

    render() {
        return (
            <div>
                <h1>WillUnMount</h1>
            </div>
        );
    }
}


export const WillUnMountHook = () => {

    useEffect(() => {
        //aqui no va nada
        return () => {
        console.log("Componte antes de que el comportamiento desaparezca")
        };
    });

    return (
        <div>
            <h1>WillUnMount</h1>
        </div>
    );
}

