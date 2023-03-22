import React from "react";

function WineComp({wineName, verietal, region, year, winery}){

    return (
        <div>
            <div>Name: </div>
            <h2>{wineName}</h2>
            <h3>Verietal: </h3>
            <div>{verietal}</div>
            <h3>Region: </h3>
            <div>{region}</div>
            <h3>Year: </h3>
            <div>{year}</div>
            <h3>Winery: </h3>
            <div>{winery.name}</div>
        </div>
    )
}

export default WineComp;