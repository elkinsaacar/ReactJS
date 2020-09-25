import React, { useState, useEffect } from 'react'

{/*export default function DetalleCoctel() {
    return (
        <div>
            Detalle Coctel !!
        </div>
    )
}*/}

const DetalleCoctel = ({IDCoctel}) => {

    const [infoCoctel, setInfoCoctel] = useState([]);

    useEffect(() =>{
        if( IDCoctel > 0 ){
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${IDCoctel}`)
            .then( resp => resp.json() )
            .then( datos => {
                const datosCoctel = datos.drinks[0] || [];
                console.log( datosCoctel );
                setInfoCoctel(datosCoctel);
            })
        }
    }, [IDCoctel] );

    const estilosImgCoctel = {
        width:'300px',
        height: 'auto'
    }

    if( IDCoctel == 0 ){
        return (
            <div>
                {/* Seleccionar coctel */}
            </div>
        )
    } else {

        const pintarIngredientes = (ingredientes, medida) => {
            if( ingredientes && medida ){
                return (
                    <div> {ingredientes} / {medida} </div>
                )
            }
        };

        return (
            <div>
                <hr/>
                <br/>
                {/*
                    -- {IDCoctel} --
                   <pre>{JSON.stringify(infoCoctel, null, 2) }</pre> 
                */}
                <div>
                    <div style={{float:'left'}}>
                        <img src={infoCoctel.strDrinkThumb} style={estilosImgCoctel} />
                    </div>
                    <div style={{float:'left', width:'50%', margin: '0px 0px 0px 50px'}}>
                        Name: {infoCoctel.strDrink}
                        <br/><br/>
                        Category: {infoCoctel.strCategory}
                        <br/><br/>
                        Glass: {infoCoctel.strGlass}
                        <br/><br/>
                        Instructions:<br/>{infoCoctel.strInstructions}
                        <br/><br/>
                        Ingredients and Measure: 
                        <div style={{margin: '10px 0px 0px 50px'}}>
                            {pintarIngredientes(infoCoctel.strIngredient1, infoCoctel.strMeasure1)}
                            {pintarIngredientes(infoCoctel.strIngredient2, infoCoctel.strMeasure2)}
                            {pintarIngredientes(infoCoctel.strIngredient3, infoCoctel.strMeasure3)}
                            {pintarIngredientes(infoCoctel.strIngredient4, infoCoctel.strMeasure4)}
                            {pintarIngredientes(infoCoctel.strIngredient5, infoCoctel.strMeasure5)}
                            {pintarIngredientes(infoCoctel.strIngredient6, infoCoctel.strMeasure6)}
                            {pintarIngredientes(infoCoctel.strIngredient7, infoCoctel.strMeasure7)}
                            {pintarIngredientes(infoCoctel.strIngredient8, infoCoctel.strMeasure8)}
                            {pintarIngredientes(infoCoctel.strIngredient9, infoCoctel.strMeasure9)}
                            {pintarIngredientes(infoCoctel.strIngredient10, infoCoctel.strMeasure10)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetalleCoctel