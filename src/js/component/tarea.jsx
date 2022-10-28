import React from "react";
import "../../styles/tarea.css"
import { AiOutlineCloseCircle } from "react-icons/ai"


const Tarea = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
    return (
        <div className= { completada? "tareaContenedor completada" : "tareaContenedor" }>
            <div 
            className="tareaTexto"
            onClick= { () => completarTarea(id) }
            >
                { texto }
            </div>
            <div
            onClick= { ()=> eliminarTarea(id) }
            >
                <AiOutlineCloseCircle className="tareaIcono" />
            </div>
        </div>
    )
}

export default Tarea