import React from "react";

function Winery({name, region, wines}){

    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Location: {region}</h3>
            <h3>Wines:</h3>
            {wines.map((wine)=>{
               return <li key={wine.id} >{wine.name}</li>
            })}
            <p>-----------------------------</p>
        </div>
    )
}

export default Winery;