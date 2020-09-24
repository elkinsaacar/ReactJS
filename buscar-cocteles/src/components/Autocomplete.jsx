import React, { useState, useEffect } from 'react'
import DetalleCoctel from './DetalleCoctel';

const Autocomplete = () => {

    //const [nombreCoctel, setNombreCoctel] = useState('mojito');
    const [nombreCoctel, setNombreCoctel] = useState('');
    const [listaCocteles, setListaCocteles] = useState([]);
    const [IDCoctelSeleccionado, setIDCoctelSeleccionado] = useState(0);

    useEffect(() =>{
        if( nombreCoctel.length > 3 ){
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombreCoctel}`)
            .then( resp => resp.json() )
            .then( datos => {
                //console.log( datos.drinks );
                //const cocteles = datos.drinks;
                //const cocteles = (datos.drinks != null) ? datos.drinks : [] ;
                const cocteles = datos.drinks || [];
                setListaCocteles(cocteles);
            })
        }
    }, [nombreCoctel] );

    const handleChangeCoctel = (event) => {
        setNombreCoctel(event.target.value)
    }

    const verDetalleCoctel = (idDrink) => {
        //alert("--ver detalle-"+idDrink+"--");
        setIDCoctelSeleccionado(idDrink);
    }

    const estilosVerDetalleCoctel = {
        cursor:'pointer',
        textDecoration: 'underline'
    }

    const resultadosCocteles = listaCocteles.map(
        coctel => {
            return(
            <li key={coctel.idDrink}>
                {coctel.strDrink}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={() => verDetalleCoctel(coctel.idDrink)} style={estilosVerDetalleCoctel}>&nbsp;Ver Más&nbsp;</span>
            </li>
            )
        }
    );
    
    return (
        <div>
            <input type="text" value={nombreCoctel} onChange={handleChangeCoctel} placeholder="Ejm.: Mojito, Cuba Libre" />
            <hr/>
            <ul> {resultadosCocteles} </ul>
            <hr/>
            <DetalleCoctel IDCoctel={IDCoctelSeleccionado} />
        </div>
    )
}

export default Autocomplete
