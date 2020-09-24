import React, { Component } from 'react'
import Formulario from './Formulario'
import Meme from './Meme'

export default class Generador extends Component {

    constructor(props){
        super(props)
        this.state = {
            textoSuperior: '', 
            textoInferior: '',
            colorTexto: '#ffffff', 
            urlImg: 'https://memezinga.osweekends.com/images/ronaldo.jpg'
        }
        this.handleChange =  this.handleChange.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        alert("Enviar formulario !!");
    }

    render() {

        const styles = {
            generador:{
                display: "flex",
                justifyContent: "space-evenly"
            }
        }
        return (
            <div>
                Generador Meme !!
                <br/><br/>
                <div style={styles.generador}>
                    <Meme
                        textoSuperior={this.state.textoSuperior} 
                        textoInferior={this.state.textoInferior} 
                        colorTexto={this.state.colorTexto} 
                        urlImg={this.state.urlImg}  />
                    <br/><br/>
                    <Formulario 
                        textoSuperior={this.state.textoSuperior} 
                        textoInferior={this.state.textoInferior} 
                        colorTexto={this.state.colorTexto} 
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}
