import React, { Fragment } from 'react';

const NuevoProyecto = () => {
    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >NuevoProyecto</button>
            
            <form>
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre del Proyecto"
                    name="nombre"
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