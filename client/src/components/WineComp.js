import React from "react";

function WineComp(wine){
    
    return (
        <div>
            <h2>{wine.name}</h2>
            <li>{wine.verietal}</li>
            <li>{wine.region}</li>
            <li>{wine.year}</li>
        </div>
    )
}

export default WineComp;