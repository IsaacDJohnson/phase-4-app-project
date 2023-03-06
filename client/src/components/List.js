import React from 'react';
import ListItem from './ListItem';
import FindWine from './FindWine';

function List({wineData, onUpdateWine, onDeleteWine, user}) {

    // const styles = {
    //     background: "#02577a",
    //     color: "white"
    //   };

  return (
    <div>
      <h2>Wine List: </h2>
      <FindWine />
      <ul>
       {wineData ? wineData.map((wine)=> 
                    <ListItem
                        user={user} 
                        wine={wine} 
                        key={wine.id}
                        winery={wine.winery}
                        onUpdateWine={onUpdateWine} 
                        onDeleteWine={onDeleteWine} 
                    />) : []}
      </ul>
    </div>
  );
}

export default List;