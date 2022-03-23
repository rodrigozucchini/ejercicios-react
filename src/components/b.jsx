import React from 'react';




const ContactoRender = ({ contacto }) => {
  return (
    <div>
        <h2>
            Nombre: { contacto.nombre }
        </h2>
        <h3>
            Apellido: { contacto.apellido }
        </h3>
        <h4>
            Email: { contacto.email }
        </h4>
        <h5>
            Conectado: { contacto.conectado ? 'En Linea' : 'No Disponible'}
        </h5>
    </div>
  );
};



export default ContactoRender;