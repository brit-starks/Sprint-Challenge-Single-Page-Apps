import React from 'react';

const LocationCard = (props) => {
  // console.log('LocationCard > props: ', props)
  return(
    <div>
      <h2>{props.name}</h2>
      <p>{props.location}</p>
    </div>
  );
}

export default LocationCard;