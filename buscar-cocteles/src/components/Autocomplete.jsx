import React, { useState, useEffect } from 'react'

const Autocomplete = () => {

    //const [nombreCoctel, setNombreCoctel] = useState('mojito');
    const [nombreCoctel, setNombreCoctel] = useState('');
    const [listaCocteles, setListaCocteles] = useState([]);

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

    const verDetalleCoctel = () => {
        alert("-ver detalle-");
    }

    const estilosVerDetalleCoctel = {
        cursor:'pointer',
        textDecoration: 'underline'
    }

    const resultadosCocteles = listaCocteles.map(
        coctel => {
            return(
            <li key={coctel.idDrink} data-id-drink={coctel.idDrink}>
                {coctel.strDrink}
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={verDetalleCoctel} style={estilosVerDetalleCoctel}>&nbsp;Ver Más&nbsp;</span>
            </li>
            )
        }
    );
    
    return (
        <div>
            <input type="text" value={nombreCoctel} onChange={handleChangeCoctel} placeholder="Ejm.: Mojito, Cuba Libre" />
            <hr/>
            <ul> {resultadosCocteles} </ul>
        </div>
    )
}

export default Autocomplete
