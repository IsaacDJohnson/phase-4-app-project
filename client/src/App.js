import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from './components/Header'
import Home from './components/Home'
import LogInUser from './components/LogInUser';
import WineriesList from './components/WineriesList';
import Users from './components/Users'
import CreateUser from './components/CreateUser';
import { UserContextProvider } from './components/UserContextProvider';

function App() {

  const [wineData, setWineData] = useState([])
  const [data, setData] = useState([])
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState([])
  const [tastings, setTastings] = useState([])

  useEffect(()=>{
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(user)
          setTastings(user.tastings)
        })
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
}, []);


function handleAddWine(addedWine) {
  setWineData((wines) => [...wines, addedWine]);
  setData(data.map((winery)=> {
    if (winery.id === addedWine.winery.id){
      winery.wines = [...winery.wines, addedWine]
      return winery
    } else {
      return winery
    }
  }))
}

function handleUpdateTasting(uppdatedTasting) {
  setTastings(user.tastings.map((tasting)=>{
    if (tasting.id === uppdatedTasting.id){
      tasting = uppdatedTasting
      return tasting
    } else {
      return tasting
    }
  })) 
}

function handleDeleteTasting(deletedTasting) {
  setTastings((tastings) =>
    tastings.filter((tasting) => tasting.id !== deletedTasting.id)
  );
}

function onAddWinery(addedWinery){
  setData((wineries) => [...wineries, addedWinery])
}

function onLogin(user){
  setUserData((users) => [...users, user])
  setUser(user)
  setTastings(user.tastings)
}

function addUserWine(addedWine){
  setTastings((wines)=> [...wines, addedWine])
}

return (                             
  <div className="App">
    <UserContextProvider >
    {!user ? <LogInUser onLogin={onLogin}/>: []}
      <Header username={user ? user.username : []} user={user}/>
      <NavBar setUser={setUser} user={user}/>
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
             data={data} 
             onAddWinery={onAddWinery}
             user={user}
           />}
           </Route>
           <Route exact path="/users">
             <Users userData={userData}/>
           </Route>
            <Route>
             <CreateUser onLogin={onLogin}/>
           </Route>
       </Switch>
      </UserContextProvider >
    </div>
  );
}

export default App;
