import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

import '../App.css';

const Characters = ()=> {

const [characters, setCharacters] = useState([]);

useEffect(() => {
  axios.get("https://rickandmortyapi.com/api/character/")
  .then(res => {
    setCharacters(res.data.results)
    console.log('Characters: ', res.data)
  })
  .catch(err => console.log('Unable to resolve request: ', err))
}, [])


  const characterCard = (char) => {
    return( 
      <CharacterCard 
      key ={char.id}
      img={char.image}
      name={char.name}
      location={char.location.name}
      species={char.species}
      status={char.status}
      origin={char.origin.name}
      />
    )}


  return(
    <>
      <div className="characters">
        {characters.map(
          // console.log('Mapped characters: ', character)
          characterCard
        )}
        <CharacterCard />
      </div>
    </>
  )
}

export default Characters;