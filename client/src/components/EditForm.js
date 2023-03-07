import React from "react";


function EditForm({rating, handleSubmit, handleChangeName}){

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p></p>
                <input type="text" id="rating" value={rating} onChange={handleChangeName}></input><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditForm;