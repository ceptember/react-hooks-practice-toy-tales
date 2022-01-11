import React from "react";

function ToyCard({toy, onDelete, updateLikes}) {

  function handleDelete(){
    onDelete(toy);
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: 'DELETE'
    })
    //.then()
  }

  function handleLike(){
    fetch(`http://localhost:3001/toys/${toy.id}`,{
      method: 'PATCH',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({likes: toy.likes + 1 })
    })
      .then( resp => resp.json())
      .then( likedToy => updateLikes(likedToy) )
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
