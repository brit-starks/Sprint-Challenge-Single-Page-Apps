import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';

const Location = (props)=> {

  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
    .then(res => {
      setLocation(res.data.results)
      console.log('Location: ', res)
    })
    .catch(err =>console.log('Unable to resolve request: ', err))
  }, []);

  // const locationCard = (location) => {
  //   return( 
  //     <LocationCard 
  //     name={location.name}
  //     location={location.type}
  //     />
  //   )}

  return (
    <div>
      {location.map( (location, index) => {
        return(
          <LocationCard location={location} key={index}/>
          )
        }
        // console.log('Mapped characters: ', character)
        )}
    </div>
  );
}

export default Location;

