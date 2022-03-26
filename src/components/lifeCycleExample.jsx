//Ciclo de vida de componentes 


import React, { Component } from 'react';


class lifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log("CONSTRUCTOR: Cuando se instancia el componente")
    }

    componentWillMount() {
        console.log("WILLMOUNT: Antes del montaje")
    }

    componentDidMount() {
        console.log("DIDMOUNT: Justo al del montaje, antes de RENDERIZARLO")
    }

    componentWillReceiveProps(nextProps) {
        console.log("WILLRECEIVEPROPS: sI VA A RECIBIR NUEVAS props")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("COMPONENTEUPDATE: Sirve para el comomente debe o no actualizarse")
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("WILLUPDATE: jUSTO ANTES DE ACTUALIZARSE")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("DIDUPDATE: Justo despues de actualizarse")
    }

    componentWillUnmount() {
        console.log("WILLUNMOUNT: Antes de desaparecer el componente")
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}



export default lifeCycleExample;