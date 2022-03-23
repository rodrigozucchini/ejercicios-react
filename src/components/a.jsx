import React from 'react';
import ContactoRender from '../components/b';

class Contacto { 
    nombre = '';
    apellido = '';
    email = '';
    conectado = false;

    constructor(nombre, apellido, email, conectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }
}

function ContactoApp  ()  {
    
    const defaultContact = new Contacto('Rodrigo', 'Zucchini', 'rodrigo@hotmail.com', false)

    return (
        <div>
            <div>
                <h1>Mi Conexión:</h1>
            </div>
            <ContactoRender contacto={ defaultContact }></ContactoRender>
        </div>
    );
};

export default ContactoApp;
