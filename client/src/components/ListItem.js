import React, { useState } from 'react';
import WineComp from './WineComp';

function ListItem({wine, winery, user, addUserWine}) {

    const {id, name, verietal, region, year} = wine

    function handleAddUserWine(e){
      e.preventDefault();
      fetch("/tastings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          user_id: user.id, 
          wine_id: id
        })})
        .then((r) => r.json())
        .then((data) => {
          addUserWine(data)
        });
    }


  return (
    <div className='card'>
          <WineComp name={name}
                    verietal={verietal}
                    region={region}
                    year={year}
                    winery={winery}
          />
        {user ? <button onClick={handleAddUserWine}>add to my list</button>:[]}
        <p>---------------------------------------------------------------------------------------------------</p>
    </div>
  );
}

export default ListItem;