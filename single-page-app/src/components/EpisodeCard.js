import React from 'react';

const EpisodeCard = (props) => {

// console.log('EpisodeCard > props: ', props)
  return(
    <div className='episode-card'>
      <div>
        <h1>{props.name}</h1>
        <h3>{props.episode}</h3>
        <h3>{props.date}</h3>
      </div>
    </div>
  )
}


export default EpisodeCard;