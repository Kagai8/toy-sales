import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  // State to toggle visibility of the new toy form
  const [showForm, setShowForm] = useState(false);
  // State to store the list of toys fetched from the backend
  const [toys, setToys] = useState([]);

  // Fetch all toys from the server when the application first loads
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Append a newly created toy to the existing toys array in state
  function handleAddToy(newToy) {
    setToys((prevToys) => [...prevToys, newToy]);
  }

  // Remove a donated (deleted) toy from state by filtering out its id
  function handleDeleteToy(deletedToyId) {
    setToys((prevToys) => prevToys.filter((toy) => toy.id !== deletedToyId));
  }

  // Update a toy's likes in state while preserving the original card order
  function handleUpdateToy(updatedToy) {
    setToys((prevToys) =>
      prevToys.map((toy) => (toy.id === updatedToy.id ? updatedToy : toy))
    );
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onUpdateToy={handleUpdateToy}
      />
    </>
  );
}

export default App;