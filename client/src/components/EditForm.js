import React from "react";

function EditForm(name, verietal, region, year, handleSubmit, handleChangeName, handleChangeRegion, handleChangeVerietal, handleChangeYear){
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChangeName}></input><br/>
                <select>
                    <option value={verietal}></option>
                </select><br/>
                <input type="text" value={region} onChange={handleChangeRegion}></input><br/>
                <input type="text" value={year} onChange={handleChangeYear}></input><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditForm;