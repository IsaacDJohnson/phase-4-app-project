import React from 'react';
import List from './List'

function Home({wineData, onUpdateWine, onDeleteWine}) {

    // const styles = {
    //     background: "#02577a",
    //     color: "white"
    //   };

  return (
    <div>
       <List wineData={wineData} onUpdateWine={onUpdateWine} onDeleteWine={onDeleteWine}/>
    </div>
  );
}

export default Home;