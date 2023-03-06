import React, {useState} from "react";

const initialState = {
    name: "name",
    region: "region",
}

function NewWineryForm({onAddWinery}){

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
        console.log(formData)
    }  

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/wineries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((r) => r.json())
          .then((newWinery) => {
            setFormData(initialState);
            onAddWinery(newWinery);
            console.log(newWinery)
          });
      }

    return (
        <div>
            <h3>Add A New Winery</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" value={formData.name} onChange={handleChange}/><br/>
                <input type="text" id="region" value={formData.region} onChange={handleChange}/><br/>
                <button type="submit">add</button>
            </form>
        </div>
    )
}

export default NewWineryForm;