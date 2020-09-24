import React, { Component } from 'react'
import Formulario from './Formulario'
import Meme from './Meme'
//import html2canvas from 'html2canvas'
/* ES6 */
import htmlToImage from 'html-to-image';
/* ES5 */
//var htmlToImage = require('html-to-image');

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

        const descargarImagen = () => {
            //alert("-Descarguemosla-");
            //download(this.state.urlImg);
            download();
        }

        /*const download = (url) => {
            console.log(url);
            fetch(url, {
              method: "GET",
              headers: {}
            })
            .then(response => {
            response.arrayBuffer().then(function(buffer) {
                const url = window.URL.createObjectURL(new Blob([buffer]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", "image.png"); //or any other extension
                document.body.appendChild(link);
                link.click();
            });
            })
            .catch(err => {
            console.log(err);
            });
        };*/
        
        const download = () => {
            //alert("-download-");
            var node = document.getElementById('ContenedorImg');
            htmlToImage.toPng(node)
                .then(function (dataUrl){
                    //var img = new Image();
                    //img.src = dataUrl;
                    //document.body.appendChild(img);
                    //download(dataUrl, 'ImagenMeme.png');

                    var link = document.createElement('a');
                    link.download = 'my-image-name.jpeg';
                    link.href = dataUrl;
                    link.click();

                })
                /*.then(function (blob) {
                    window.saveAs(blob, 'my-node.png');
                  })*/
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
        };

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
                <br/><br/>
                <button type="button" id="btn_download" name="btn_download" onClick={descargarImagen} > Descargar Imagen </button>
            </div>
        )
    }
}
