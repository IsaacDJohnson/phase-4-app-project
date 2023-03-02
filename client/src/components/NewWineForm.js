import React, {useState} from "react";

const initialState = {
    name: "name",
    verietal: "",
    region: "region",
    year: "year",
}

function NewWineForm({onAddWine, wineData}){

    const [formData, setFormData] = useState(initialState)
    const [wine, setWine] = useState("")


    function handleWineChange(e){
        setWine(e.target.value)
      }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }  

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/wines", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((r) => r.json())
          .then((newWine) => {
            setFormData(initialState);
            onAddWine(newWine);
          });
      }

    return (
        <div>
            <h3>Add A New Wine</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" value={formData.name} onChange={handleChange}/><br/>
                <select onChange={handleWineChange}>
                    <option value={wine}>Select Verietal</option>
                    {wineData.map((wine) => <option value={wine.id} key={wine.id}>{wine.verietal}</option>)}
                </select><br/>
                <input type="text" id="region" value={formData.region} onChange={handleChange}/><br/>
                <input type="text" id="year" value={formData.year} onChange={handleChange}/><br/>
                <button type="submit">add</button>
            </form>
        </div>
    )
}

export default NewWineForm;