import React, { useEffect } from 'react'

{/*export default function DetalleCoctel() {
    return (
        <div>
            Detalle Coctel !!
        </div>
    )
}*/}

const DetalleCoctel = ({IDCoctel}) => {

    useEffect(() =>{
        if( IDCoctel > 0 ){
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${IDCoctel}`)
            .then( resp => resp.json() )
            .then( datos => {
                console.log( datos );
            })
        }
    }, [IDCoctel] );

    if( IDCoctel == 0 ){
        return (
            <div>
                Seleccionar coctel
            </div>
        )
    } else {
        return (
            <div>
                -- {IDCoctel} --
            </div>
        )
    }
}

export default DetalleCoctel