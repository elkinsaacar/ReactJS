import React, { Component } from 'react'

const Meme = ({textoSuperior, textoInferior, colorTexto, urlImg}) => {

    const styles = {
        divPrincipal: {
            position: "relative",
            display: "inline-block",
            width: "50%"
        },
        divSuperior: {
            position: "absolute",
            top: "0",
            width: "100%",
            textAlign: "center",
            color: colorTexto,
            fontSize: "50px", 
            textShadow: "-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000"
        },
        divInferior: {
            bottom: "10px",
            position: "absolute",
            width: "100%",
            textAlign: "center",
            color: colorTexto, 
            fontSize: "50px", 
            textShadow: "-3px -3px 0 #000, 3px -3px 0 #000, -3px 3px 0 #000, 3px 3px 0 #000"
        },
        estilosImg:{
            width: "100%"
        }
    };

    return (
        <div style={styles.divPrincipal}>
            <img src={urlImg}  style={styles.estilosImg} />
            <div style={styles.divSuperior}>
                {textoSuperior}
            </div>
            <div style={styles.divInferior}>
                {textoInferior}
            </div>
            {/* <br/>
            textoSuperior = {textoSuperior}
            <br/>
            textoInferior = {textoInferior}
            <br/>
            colorTexto = {colorTexto} */}
        </div>
    )
}

export default Meme