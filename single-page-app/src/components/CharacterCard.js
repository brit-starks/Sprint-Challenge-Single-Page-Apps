import React from 'react';
import '../App.css';

const CharacterCard = (props) => {
  console.log('CharacterCard > props: ', props)
  return(
    <div className="character-wrapper">
      <h1 className="character-name">{props.name}</h1>
      <img src={props.img} alt={props.name} className="character-img"/>
      <p className="species">{props.species } <span>| {props.status}</span></p>
      <p>Current Location: {props.location}</p>
      <p>Origin: {props.origin}</p>
    </div>
  )
}


export default CharacterCard;