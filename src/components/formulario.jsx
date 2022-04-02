import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from './contacto-class';

const TaskContacto = ({add}) => {
    
    const nameRef = useRef("");

    function addContacto(e){
        e.preventDefault();
        const newContacto = new Contacto(
            nameRef.current.value,
            false,
        );
        add(newContacto); 
    }
    
    return (
        <form onSubmit={addContacto} className="d-flex justify-content-center align-items-center mb-4">
            <div className="form-outline flex-fill">
                <input ref={nameRef} id="inputName" type="text" className="form-control form-control-lg" required autoFocus placeholder='Nombre de la tarea'/>
                <label htmlFor="selectLevel" className="sr-only"></label>
            </div>
            <button type="submit" className="btn btn-success btn-lg ms-2">Añadir Tarea</button>
        </form>
    );
}

TaskContacto.ProtoTypes = {
    add: PropTypes.func.isRequired
}

export default TaskContacto;