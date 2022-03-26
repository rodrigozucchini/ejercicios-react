//Ejemplo de uso de ciclo de vida DIDMOUNT en clase y el hook en componente Funcional

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount() {
        console.log("Comportamiento antes que el componente sea añadido al DOM")
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}


export const DidmountHook = () => {

    useEffect(() => {
        console.log("Comportamiento antes que el componente sea añadido al DOM")
    }, []);

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

