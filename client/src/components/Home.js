import React from 'react';
import List from './List'
import NewWineForm from './NewWineForm';
import TastingsList from './TastingsList';

function Home({data, onUpdateTasting, onDeleteTasting, wineryData, handleAddWine, user, addUserWine, tastings}) {

    // const styles = {
    //     background: "#02577a",
    //     color: "white"
    //   };

  return (
    <div>
      {user ? <NewWineForm onAddWine={handleAddWine} wineData={data} wineryData={wineryData}/> : []}
      {user ? <TastingsList tastings={tastings} user={user} onDeleteTasting={onDeleteTasting} onUpdateTasting={onUpdateTasting}/>:[]}
      <List wineData={data} user={user} addUserWine={addUserWine}/>
    </div>
  );
}

export default Home;