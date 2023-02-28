import React, { useState, useEffect } from 'react'
import NavBar from "./NavBar";
import { Switch, Route } from "react-dom";
import Header from './Header'
import Home from './Home'

function App() {

  const [data, setData] = useState([])

  useEffect(()=>{
    fetch("/wines")
    .then(res => res.json())
    .then(data => setData(data))
}, [])

  return (
    <div className="App">
    <Header />
    <Home wineData={data}/>
    </div>
  );
}

export default App;
