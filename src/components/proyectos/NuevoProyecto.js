import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // Obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;
    
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
        e.preventDefault();

        // validar el proyecto
        if(nombre === ''){
            return;
        }

        // agregar al state
        agregarProyecto(proyecto);

        // Reiniciar el form
    }

    // Mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }
    
    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickFormulario}
            >NuevoProyecto</button>
            
            { formulario ?
                (
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
                ) : null
        
            }
            
        </Fragment>
     );
}
 
export default NuevoProyecto;