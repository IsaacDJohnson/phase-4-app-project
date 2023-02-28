import React from 'react';
import List from './List'

function Home({wineData}) {

    // const styles = {
    //     background: "#02577a",
    //     color: "white"
    //   };

  return (
    <div>
       <List wineData={wineData}/>
    </div>
  );
}

export default Home;