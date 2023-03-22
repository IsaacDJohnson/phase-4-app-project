import React, {useState} from "react";

const initialState = {
    name: "",
    verietal: "",
    region: "",
    year: "",
    winery_id: "winery_id"
}

function NewWineForm({onAddWine, wineryData}){

    const [formData, setFormData] = useState(initialState)

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
          .then((r) => {
            if (r.ok) {
                r.json().then((wine)=> onAddWine(wine))
                setFormData(initialState)
            } else {
                r.json().then((error)=> console.log(error))
            }
          });         
      }

    return (
        <div className="card">
            <h3>Add A New Wine</h3>
            <form onSubmit={handleSubmit}>
                <div>Name:</div>
                <input type="text" id="name" value={formData.name} onChange={handleChange}/><br/>
                <div>Verietal:</div>
                <select onChange={handleChange} value={formData.verietal} id="verietal">
                    <option>Select Verietal</option>
                    <option>Blend</option>
                    <option>Malbec</option>
                    <option>Pinot Grigio</option>
                    <option>Chardonnay</option>
                    <option>Cabernet</option>
                    <option>Pinot Noir</option>
                    <option>Sauvignon Blanc</option>
                </select><br/>
                <div>Region</div>
                <input type="text" id="region" value={formData.region} onChange={handleChange}/><br/>
                <div>Year</div>
                <input type="text" id="year" value={formData.year} onChange={handleChange}/><br/>
                <div>Winery:</div>
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