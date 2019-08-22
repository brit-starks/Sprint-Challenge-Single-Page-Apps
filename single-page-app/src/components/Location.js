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

  return (
    <div>
      {location.map( (location, index) => {
        return(
          <LocationCard location={location} key={index} className='location' />
          )
        }
        )}
    </div>
  );
}

export default Location;

