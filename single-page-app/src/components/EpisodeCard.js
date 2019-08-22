import React from 'react';
import '../App';

const EpisodeCard = (props) => {

// console.log('EpisodeCard > props: ', props)
  return(
    <div className='episode-card'>
      <div>
        <h2>{props.name}</h2>
        <h3>{props.episode}</h3>
        <h3>{props.date}</h3>
      </div>
    </div>
  )
}


export default EpisodeCard;