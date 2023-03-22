import React from 'react';
import List from './List'
import NewWineForm from './NewWineForm';
import TastingsList from './TastingsList';

function Home({data, onUpdateTasting, onDeleteTasting, wineryData, onAddWine, addUserWine, tastings, user}) {

  return (
    <div>
      {user ? <NewWineForm onAddWine={onAddWine} wineData={data} wineryData={wineryData}/> : []}
      {user ? <TastingsList tastings={tastings} onDeleteTasting={onDeleteTasting} onUpdateTasting={onUpdateTasting} user={user}/>:[]}
      <List wineData={data} addUserWine={addUserWine} user={user}/>
    </div>
  );
}

export default Home;