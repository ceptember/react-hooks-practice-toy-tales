import React, {useState} from "react";

function ToyForm({onFormSubmit}) {

   const [newToyName, setNewToyName] = useState("");
   const [newToyImage, setNewToyImage] = useState(""); 

  function handleSubmit(event){
    event.preventDefault();
    const newToyObj = {
      name: newToyName,
      image: newToyImage,
      likes: 0
    }

    fetch('http://localhost:3001/toys', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newToyObj)
    })
      .then(resp => resp.json())
      .then(postedToy => onFormSubmit(postedToy))
  
    setNewToyName("");
    setNewToyImage("");  
    }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value = {newToyName}
          onChange = {(e)=> setNewToyName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value = {newToyImage}
          onChange = {(e) => setNewToyImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
