import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from './contacto-class';



const Contactos = ({ contacto, cambiar, remove }) => {


    function contactoCompleted() {
        if (contacto.session) {
            return <i onClick={()=>cambiar(contacto)} className="bi-toggle-on task-action" style={{color: "green"}}></i>
        } else {
            return <i onClick={()=>cambiar(contacto)} className="bi-toggle-off task-action" style={{color: "grey"}}></i>
        }
    }


    return (
    <div>
            <span>Nombre: { contacto.name }</span>
            <br />
            <span >Session: {contactoCompleted()}</span>
            <br />
            <button  onClick={()=>remove(contacto)}> Borrar Contacto</button>
            <br />
            <br />
    </div>
);
};

Contactos.propTypes = {
    Contacto: PropTypes.instanceOf(Contacto).isRequired,
    session: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};
export default Contactos;
