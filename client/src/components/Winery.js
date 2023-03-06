import React from "react";

function Winery({name, region}){

    return (
        <div>
            <h2>Name: {name}</h2>
            <h3>Location: {region}</h3>
            <p>-----------------------------</p>
        </div>
    )
}

export default Winery;