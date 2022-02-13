import React from 'react'
import MusicPlatform from '../molecules/MusicPlatform';
import HorizontalLine from '../atoms/HorizontalLine'

function MusicPlatforms({players = []}) {
  return (
    <ul className='music-platforms'>
      {players.map((player, index) => (
        <MusicPlatform key={index} {...player} />
      ))}
    </ul>
  );
}

export default MusicPlatforms;
