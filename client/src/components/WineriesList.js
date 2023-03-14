import React from "react"
import Winery from './Winery'
import NewWineryForm from './NewWineryForm'
import { useLogged } from "./UserContextProvider"

function WineriesList({onAddWinery, data}){

    // console.log(data)
    return (
        <div className="card">
            <h1>Wineries List:</h1>
            {!useLogged ? <NewWineryForm onAddWinery={onAddWinery}/> : [] }
            <ul>
            {data ? data.map((winery)=> 
                    <Winery 
                        name={winery.name}
                        region={winery.region} 
                        key={winery.id}
                    />) : []}
            </ul>
        </div>
    )
}

export default WineriesList;