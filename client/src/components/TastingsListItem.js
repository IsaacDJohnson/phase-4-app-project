import React, {useState} from "react";
import EditForm from './EditForm';

function TastingsListItem({item, onDeleteTasting, onUpdateTasting}){

    const [rating, setTastingRating] = useState("")
    const [editForm, setEditForm] = useState(true)
    const handleChangeName = (e) => setTastingRating(e.target.value)
    
    function handleUpdateTasting(e) {
        e.preventDefault()
        fetch(`/tastings/${item.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rating: rating,
          }),
        })
          .then((r) => r.json())
          .then(data => {
            onUpdateTasting(data)
            setEditForm(true)
        });
      }

      function handleDelete() {
        fetch(`/tastings/${item.id}`, {
          method: "DELETE",
        }).then((r) => {
          if (r.ok) {
            onDeleteTasting(item);
          }
        });
      }

    return (
        <div className="card">
            <h3>{item.name}</h3>
            {editForm ? <h3>rating: { editForm ? item.rating : 0}</h3> : <EditForm handleSubmit={handleUpdateTasting} handleChangeName={handleChangeName} rating={rating}/>}
            {editForm ? <button onClick={() => editForm ? setEditForm(false) : setEditForm(true)}>edit rating</button>: []}
            <button onClick={handleDelete}>delete</button><br/>
        </div>
    )
}

export default TastingsListItem;