import React from "react"
import Winery from './Winery'
import NewWineryForm from './NewWineryForm'

function WineriesList({onAddWinery, data, user}){

    return (
        <div className="card">
            {user ? <NewWineryForm onAddWinery={onAddWinery}/> : [] }
            <h1>Wineries List:</h1>
            <ul>
            {data ? data.map((winery)=> 
                    <Winery 
                        name={winery.name}
                        region={winery.region} 
                        key={winery.id}
                        wines={winery.wines}
                    />) : []}
            </ul>
        </div>
    )
}

export default WineriesList;