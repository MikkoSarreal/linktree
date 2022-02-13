import React, { useState } from 'react'
import Expandable from '../atoms/Expandable'
import MusicPlatforms from '../organisms/MusicPlatforms'
import Player from '../molecules/Player'
import { useMusicPlayer } from '../../contexts/music-player-context'

function MusicPlayer({data, children}) {
  const [active, setActive] = useState(false)
  const { state: { active: activeMusicPlatform } } = useMusicPlayer()
  
  const handleToggle = () => {
    setActive(!active)
  }
  
  const button = React.cloneElement(children, { onClick: handleToggle })

  return (
    <div className='music-player'>
      {button}
      <Expandable active={active}>
        { activeMusicPlatform.embed && <Player url={activeMusicPlatform.embed} /> }
        <MusicPlatforms players={data.players}/>
      </Expandable>
    </div>
  );
}

export default MusicPlayer;
