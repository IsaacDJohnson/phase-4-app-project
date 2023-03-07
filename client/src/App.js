import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from './components/Header'
import Home from './components/Home'
import LogInUser from './components/LogInUser';
import WineriesList from './components/WineriesList';
import Users from './components/Users'
import CreateUser from './components/CreateUser';

function App() {

  const [wineData, setWineData] = useState([])
  const [data, setData] = useState([])
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState([])
  const [tastings, setTastings] = useState([])

  useEffect(()=>{
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
    fetch("/users")
    .then(res => res.json())
    .then(data => setUserData(data))
    fetch("/wineries")
    .then(res => res.json())
    .then(data => setData(data))
    fetch("/wines")
    .then(res => res.json())
    .then(data => setWineData(data))
    fetch("/tastings")
    .then(res => res.json())
    .then(data => setTastings(data))
}, []);

function handleAddWine(addedWine) {
  setWineData((wines) => [...wines, addedWine]);
}

function handleUpdateTasting(updatedTasting) {
  setTastings((tastings) =>
    tastings.map((tasting) => {
      return tasting.id === updatedTasting.id ? updatedTasting : tasting;
    })
  );
}

function handleDeleteTasting(deletedTasting) {
  setTastings((tastingd) =>
    tastingd.filter((tasting) => tasting.id !== deletedTasting.id)
  );
}

function onAddWinery(addedWinery){
  setData((wineries) => [...wineries, addedWinery])
}

function onLogin(user){
  setUser(user)
}

function addUserWine(addedWine){
  console.log(addedWine)
}

return (                             
  <div className="App">
    <Header user={user} username={user ? user.username : []}/>
    <NavBar setUser={setUser} user={user}/>
    {!user ? <LogInUser onLogin={onLogin}/> : []}
      <Switch>  
        <Route exact path="/">
          {<Home 
            data={wineData}
            onUpdateTasting={handleUpdateTasting}
            onDeleteTasting={handleDeleteTasting}
            onAddWine={handleAddWine}
            wineryData={data}
            user={user}
            addUserWine={addUserWine}
            tastings={tastings}
          />}
        </Route>
        <Route exact path="/wineries">{
          <WineriesList
            userCheck={user}
            data={data} 
            onAddWinery={onAddWinery}
          />}
          </Route>
          <Route exact path="/users">
            <Users userData={userData}/>
          </Route>
          <Route>
            <CreateUser onLogin={setUser}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
