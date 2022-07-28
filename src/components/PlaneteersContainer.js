import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({ planateers, searchTerm, isSearchByAge }) {
  // let currentYear = new Date().getFullYear();
  const handleRender = () => {
      if (isSearchByAge) {
     let copy = [...planateers]
     let sortedArray = copy.sort((a, b) => a.born - b.born);
      return sortedArray
    }
    else if (!searchTerm){
      return planateers;
    } else { 
      //sometimes seems like it does work but there is just very little difference between each planateer bc/ using bio too
      return planateers.filter(teer => teer.name.toLowerCase().includes(searchTerm.toLowerCase()) || teer.bio.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    
  };

  let outPut = handleRender().map(planeteer  => {
    return <Planeteer planeteer={planeteer} key={planeteer.id} />;
  })
  return (
    <ul className="cards">
      {outPut}
    </ul>
  );
}

export default PlaneteersContainer;
