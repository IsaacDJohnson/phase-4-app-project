import React from "react";
import TastingsListItem from "./TastingsListItem";

function TastingsList({tastings, onUpdateTasting, onDeleteTasting, user}){

    return (
        <div>
            <h3>My Tastings List</h3>
            <ul>
                {tastings ? tastings.map((item)=> 
                <TastingsListItem item={item} onDeleteTasting={onDeleteTasting} onUpdateTasting={onUpdateTasting} user={user}/>) : []}</ul>
        </div>
    )
}

export default TastingsList;