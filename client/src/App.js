import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from './components/Header'
import Home from './components/Home'
import LogInUser from './components/LogInUser';
import NewWineForm from './components/NewWineForm'
import FindWine from './components/FindWine';

function App() {

  const [data, setData] = useState([])

  useEffect(()=>{
    fetch("/wines")
    .then(res => res.json())
    .then(setData)
}, [])

function handleAddWine(addedWine) {
  setData((wines) => [...wines, addedWine]);
}

function handleUpdateWine(updatedWine) {
  setData((wines) =>
    wines.map((wine) => {
      return wine.id === updatedWine.id ? updatedWine : wine;
    })
  );
}

function handleDeleteWine(deletedWine) {
  setData((wines) =>
    wines.filter((wine) => wine.id !== deletedWine.id)
  );
}


  return (
    <div className="App">
    <Header />
    <NavBar />
    <LogInUser />
    <NewWineForm onAddWine={handleAddWine} wineData={data}/>
    <FindWine />
      <Switch>
        <Route exact path="/">
          {<Home 
            wineData={data}
            onUpdateWine={handleUpdateWine}
            onDeleteWine={handleDeleteWine}
          />}
        </Route>    
      </Switch>
    </div>
  );
}

export default App;
