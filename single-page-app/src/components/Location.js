import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

const Location = (props)=> {

  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
    .then(res => {
      setLocation(res.data.results)
      // console.log('Location: ', res.data)
    })
    .catch(err =>console.log('Unable to resolve request: ', err))
  }, [])

  const LocationCard = (location) => {
    return( 
      <LocationCard 
      name={location.name}
      location={location.type}
      />
    )}

  return (
    <div>
      {location.map(
        // console.log('Mapped characters: ', character)
        LocationCard
      )}
      <LocationCard />
    </div>
  );
}

export default Location;