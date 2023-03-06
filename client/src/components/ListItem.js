import React, { useState } from 'react';
import WineComp from './WineComp';
import EditForm from './EditForm';

function ListItem({wine, onUpdateWine, onDeleteWine, winery, user}) {

    const {name, verietal, region, year} = wine

    const [editForm, setEditForm] = useState(true)
    const [wineName, setWineName] = useState(name)
    const [wineVerietal, setWineVerietal] = useState(verietal)
    const [wineRegion, setWineRegion] = useState(region)
    const [wineYear, setWineYear] = useState(year)
    const [wineryData, setWineryData] = useState(winery)

    // console.log(wineryData)

    const handleChangeName = (e) => setWineName(e.target.value)
    const handleChangeVerietal = (e) => setWineVerietal(e.target.value)
    const handleChangeRegion = (e) => setWineRegion(e.target.value)
    const handleChangeYear = (e) => setWineYear(e.target.value)

    function handleUpdateWine() {
      fetch(`/wines/${wine.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: wineName,
          verietal: wineVerietal,
          region: wineRegion,
          year: wineYear
        }),
      })
        .then((r) => r.json())
        .then(onUpdateWine);
    }
  
    function handleDeleteWine() {
      fetch(`/wines/${wine.id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          onDeleteWine(wine);
        }
      });
    }

  return (
    <div className=''>
        {editForm ? 
          <WineComp name={name}
                    verietal={verietal}
                    region={region}
                    year={year}
                    winery={winery}
          /> : 
          <EditForm handleSubmit={handleUpdateWine}
                    handleChangeName={handleChangeName}
                    handleChangeRegion={handleChangeRegion}
                    handleChangeVerietal={handleChangeVerietal}
                    handleChangeYear={handleChangeYear}
                    name={wineName} 
                    verietal={wineVerietal}
                    region={wineRegion}
                    year={wineYear}
          />}
        {editForm ? <button onClick={() => editForm ? setEditForm(false) : setEditForm(true)}>{user ? "edit" : "login to edit"}</button>: []}
        {user ? <button onClick={handleDeleteWine}>delete</button> : []}
        <p>---------------------------------------------------------------------------------------------------</p>
    </div>
  );
}

export default ListItem;