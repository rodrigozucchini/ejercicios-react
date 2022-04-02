import React, { useState } from 'react';
import { Contacto } from './contacto-class';
import Contactos from './ej-7-8-9';
import TaskContacto from './formulario';

const ComponentListContacto = () => {
    const contacto1 = new Contacto('Rodrigo ',  false)
    const contacto2 = new Contacto('Juan ',  false)
    const contacto3 = new Contacto('Emilio ',  true)
    
    const [contactos, setContactos] = useState([contacto1,contacto2,contacto3]);




    function cambiarSession(contacto){
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos[index].session = !tempContactos[index].session
        //Añadir la actualizacion del estado y actualizo la iteraccion
        setContactos(tempContactos)
    }


    function deleteContacto(contacto) {
        console.log("Borrar tarea")
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos.splice(index,1);
        setContactos(tempContactos);
    }


    function addContacto(contacto) {
        console.log("Añadir tarea tarea")
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos.push(contacto);
        setContactos(tempContactos);
    }

    return (
        <div>
            { contactos.map((contacto, index) => {
                return (
                    <Contactos
                        key={ index } 
                        contacto={ contacto }
                        cambiar={cambiarSession}
                        remove={deleteContacto}
                        >
                    </Contactos>
                )
            }
            )}
            <TaskContacto add={addContacto}></TaskContacto>
        </div>
    );
}

export default ComponentListContacto