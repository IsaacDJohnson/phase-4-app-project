import React from 'react';
import List from './List'
import NewWineForm from './NewWineForm';

function Home({data, onUpdateWine, onDeleteWine, wineryData, handleAddWine, user}) {

    // const styles = {
    //     background: "#02577a",
    //     color: "white"
    //   };

  return (
    <div>
      {user ? <NewWineForm onAddWine={handleAddWine} wineData={data} wineryData={wineryData}/> : []}
      <List wineData={data} onUpdateWine={onUpdateWine} onDeleteWine={onDeleteWine} user={user}/>
    </div>
  );
}

export default Home;