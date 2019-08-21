import React, { useEffect, useState} from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function RMEpisode(props) {

  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode/")
    .then(res => {
      setEpisode(res.data.results)
      console.log('Episode:', res.data)
    })
    .catch(err =>console.log('Unable to resolve request: ', err))
  }, [])

  const episodeCard = (epi) => {
    return( 
      <EpisodeCard 
      key ={epi.id}
      name={epi.name}
      episode={epi.episode}
      date={epi.air_date}
      />
    )}

  return(

    <div className='episode-card'>
    {episode.map(
      // console.log('Mapped characters: ', character)
      episodeCard
    )}
    <EpisodeCard />
  </div>
  );
  }
