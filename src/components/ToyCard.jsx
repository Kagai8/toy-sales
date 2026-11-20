import React from "react";

function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  // Send a PATCH request to increment the toy's likes on the backend
  function handleLikeClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toy.likes + 1,
      }),
    })
      .then((res) => res.json())
      .then((updatedToy) => onUpdateToy({ ...toy, ...updatedToy }));
  }

  // Send a DELETE request to remove the toy from the backend, then update state
  function handleDeleteClick() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    }).then(() => onDeleteToy(toy.id));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{toy.name /* Toy's Name */}</h2>
      <img
        src={toy.image /* Toy's Image */}
        alt={toy.name /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{toy.likes /* Toy's Likes */} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;