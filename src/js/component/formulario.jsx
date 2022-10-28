import React, { useState } from "react";
import "../../styles/formulario.css"
import { v4 as uuidv4 } from "uuid"

const Formulario = (props) => {


    const [input, setInput] = useState("")

    const escribirCambio = e => {
        setInput(e.target.value)

    }

    const clickEnvio = e => {
        e.preventDefault()
       
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva)
    }


    return (
        <form 
        className="tareaFormulario"
        onSubmit={clickEnvio}
        >
            <input 
            className="tareaInput" 
            type="text" 
            placeholder="Escribe aqui"
            name="texto"
            onChange={escribirCambio}
            />
            <button className="tareaBotton">Agregar tarea</button>
        </form>
    )
}

export default Formulario