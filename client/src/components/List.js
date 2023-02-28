import React from 'react';
import ListItem from './ListItem';

function List({wineData}) {

    // const styles = {
    //     background: "#02577a",
    //     color: "white"
    //   };

  return (
    <div>
       <ul>
       {wineData ? wineData.map((item)=> 
                    <ListItem 
                        item={item} 
                        key={item.id} 
                    />) : []}
       </ul>
    </div>
  );
}

export default List;