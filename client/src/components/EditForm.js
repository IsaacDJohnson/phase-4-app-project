import React from "react";


function EditForm({name, verietal, region, year, handleSubmit, handleChangeName, handleChangeRegion, handleChangeYear}){

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p></p>
                <input type="text" id="name" value={name} onChange={handleChangeName}></input><br/>
                <p>verietal:</p>
                <input type="text" id="verietal" value={verietal} onChange={handleChangeName}></input><br/>
                <p>region:</p>
                <input type="text" id="region" value={region} onChange={handleChangeRegion}></input><br/>
                <p>year:</p>
                <input type="text" id="year" value={year} onChange={handleChangeYear}></input><b/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditForm;