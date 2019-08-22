import React from 'react';

const LocationCard = ({location}) => {
  // console.log('LocationCard > props: ', props)
  return(
    <div>
      <h2>{location.name}</h2>
      <p>{location.dimension}</p>
      <p>{location.residents.length}</p>
    </div>
  );
}

export default LocationCard;