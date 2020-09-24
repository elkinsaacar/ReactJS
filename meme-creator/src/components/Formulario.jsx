import React, { Component } from 'react'

const Formulario = ({textoSuperior, textoInferior, colorTexto, handleChange, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="textoSuperior">texto superior:</label>
            <input type="text" id="textoSuperior" name="textoSuperior" value={textoSuperior} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="textoInferior">texto inferior:</label>
            <input type="text" id="textoInferior" name="textoInferior" value={textoInferior} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="colorTexto">color:</label>
            <input type="color" id="colorTexto" name="colorTexto" value={colorTexto} onChange={handleChange} />
        </div>

        {/* <button type="button">Login</button> */}
        </form>
    )
}

export default Formulario