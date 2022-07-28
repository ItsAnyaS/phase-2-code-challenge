import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({ setRefresh }) {
  function handleClick() {
    const randomPlaneteer = getRandomPlaneteer();
    setRefresh((prev) => !prev);
    fetch("http://localhost:8003/planeteers", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(randomPlaneteer),
    });
  }

  return (
    <div className="centered">
      <button onClick={handleClick} id="random-planeteer">
        Click to Show a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
