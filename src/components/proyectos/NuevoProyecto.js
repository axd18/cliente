import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {
    
    // State para Proyecto
    const [proyecto, guardarProyecto] = useState({
        nombre:''
    });

    // Extraer nombre de proyecto
    const { nombre } = proyecto;

    
    // Lee los comentarios del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }
    
    // Cuando el usuario envía un proyecto
    const onSubmitProyecto = e => {
        e.prventDefault();

        // validar el proyecto


        // agregar al state


        // Reiniciar el form
    }
    
    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >NuevoProyecto</button>
            
            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre del Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />
                <input
                    type="submit"
                    className="btn btn-block btn-primario"
                    value="Agregar Proyecto"
                />

            </form>
        </Fragment>
     );
}
 
export default NuevoProyecto;