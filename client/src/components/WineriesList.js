import React from "react"
import Winery from './Winery'
import NewWineryForm from './NewWineryForm'
import FindWinery from "./FindWinery"

function WineriesList({onAddWinery, data, userCheck}){

    // console.log(data)
    return (
        <div>
            <FindWinery />
            <h1>Wineries List:</h1>
            {userCheck ? <NewWineryForm onAddWinery={onAddWinery}/> : [] }
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