import React from "react";

function WineComp(wine){

    return (
        <div>
            <div>Name: </div>
            <h2>{wine.name}</h2>
            <h3>Verietal: </h3>
            <div>{wine.verietal}</div>
            <h3>Region: </h3>
            <div>{wine.region}</div>
            <h3>Year: </h3>
            <div>{wine.year}</div>
            <h3>Winery: </h3>
            <div>{wine.winery.name}</div>
        </div>
    )
}

export default WineComp;