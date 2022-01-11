import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  const [showForm, setShowForm] = useState(true);
  const [toys, setToys] = useState([])

  useEffect( () => {
    fetch('http://localhost:3001/toys')
      .then(resp => resp.json())
      .then(data => setToys(data))
  }, [])


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy){
    const updatedToys = [...toys, newToy]
    setToys(updatedToys);
  }

  function deleteToy(deletedToy){
    const updatedToys= toys.filter( toy => toy.id !== deletedToy.id)
    setToys(updatedToys);
  }

  function handleToyLikes(likedToy){
    const updatedToys = toys.map( toy => {
      if (toy.id === likedToy.id){
        return likedToy; 
      }
      else {
        return toy
      }
    })
    setToys(updatedToys); 
  }


  return (
    <>
      <Header />
      {showForm ? <ToyForm onFormSubmit={addNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDelete={deleteToy} updateLikes={handleToyLikes}/>
    </>
  );
}

export default App;

/*
App (Toys state lives here)
  |--Header
  |--ToyForm (POST to server and pass state to ToyContainer to render new ToyCard)
  |--ToyContainer (GET toys from server and Render ToyCards)
      |--ToyCard (DELETE from server and from state | PATCH server with like btn and set state)

      
*/