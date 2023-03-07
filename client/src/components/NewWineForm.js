import React, {useState} from "react";

const initialState = {
    name: "name",
    verietal: "verietal",
    region: "region",
    year: "year",
    winery_id: "winery_id"
}

function NewWineForm({onAddWine, wineData, wineryData}){

    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
        console.log(formData)
    }  

    const handleSubmit = (e) => {
        // e.preventDefault();
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
            // onAddWine(newWine);
            console.log(newWine)
          });
      }

    return (
        <div className="card">
            <h3>Add A New Wine</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" value={formData.name} onChange={handleChange}/><br/>
                <select onChange={handleChange} value={formData.verietal} id="verietal">
                    <option >Select Verietal</option>
                    {wineData.map((wine) => <option value={wine.verietal} key={wine.id}>{wine.verietal}</option>)}
                </select><br/>
                <input type="text" id="region" value={formData.region} onChange={handleChange}/><br/>
                <input type="text" id="year" value={formData.year} onChange={handleChange}/><br/>
                <select onChange={handleChange} value={formData.winery_id} id="winery_id">
                    <option >Select Winery</option>
                    {wineryData.map((winery) => <option value={winery.id} key={winery.id}>{winery.name}</option>)}
                </select><br/>
                <button type="submit">add</button>
            </form>
        </div>
    )
}

export default NewWineForm;