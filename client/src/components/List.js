import React from 'react';
import ListItem from './ListItem';

function List({wineData, addUserWine, user}) {

    // const styles = {
    //     background: "#02577a",
    //     color: "white"
    //   };

  return (
    <div>
      <h2>Wine List: </h2>
      <ul>
       {wineData ? wineData.map((wine)=> 
                    <ListItem
                        user={user}
                        wine={wine} 
                        key={wine.id}
                        winery={wine.winery}
                        addUserWine={addUserWine} 
                    />) : []}
      </ul>
    </div>
  );
}

export default List;