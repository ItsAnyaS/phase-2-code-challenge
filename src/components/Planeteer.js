import React, {useState} from "react";

function Planeteer({ planeteer }) {
const [bioIsShown, setBioIsShown]= useState(true)
const currentYear = new Date().getFullYear();
  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={planeteer.pictureUrl}
          alt={planeteer.name}
          className="card__image"
          onClick={()=> {setBioIsShown(prev => !prev)}}
        />
        <div className="card__content">
          <div className="card__title">{planeteer.name}</div>
          <p className="card__text">{bioIsShown ? planeteer.bio : planeteer.quote}</p>
          <div className="card__detail">
            <p>{planeteer.twitter}</p>
            <p>{currentYear-planeteer.born}</p>
            <p>{planeteer.fromUSA ? "USA-based" : "Working overseas"}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
