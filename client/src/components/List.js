import React from 'react';
import ListItem from './ListItem';

function List({wineData, onUpdateWine, onDeleteWine}) {

    const styles = {
        background: "#02577a",
        color: "white"
      };

  return (
    <div style={styles}>
       <ul>
       {wineData ? wineData.map((wine)=> 
                    <ListItem 
                        wine={wine} 
                        key={wine.id}
                        onUpdateWine={onUpdateWine} 
                        onDeleteWine={onDeleteWine} 
                    />) : []}
       </ul>
    </div>
  );
}

export default List;