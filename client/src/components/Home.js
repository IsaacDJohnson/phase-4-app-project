import React from 'react';
import List from './List'
import NewWineForm from './NewWineForm';
import TastingsList from './TastingsList';
import { useLogged } from './UserContextProvider';

function Home({data, onUpdateTasting, onDeleteTasting, wineryData, handleAddWine, addUserWine, tastings, user}) {



  return (
    <div>
      {!useLogged ? <NewWineForm onAddWine={handleAddWine} wineData={data} wineryData={wineryData}/> : []}
      {!useLogged ? <TastingsList tastings={tastings} onDeleteTasting={onDeleteTasting} onUpdateTasting={onUpdateTasting} user={user}/>:[]}
      <List wineData={data} addUserWine={addUserWine} user={user}/>
    </div>
  );
}

export default Home;