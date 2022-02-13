import React from 'react'
import Arrow from '../atoms/Arrow'
import { useMusicPlayer } from '../../contexts/music-player-context'
import { ReactComponent as AppleMusicIcon } from '../../assets/images/apple-music.svg'
import { ReactComponent as SpotifyIcon } from '../../assets/images/spotify.svg'
import { ReactComponent as SoundcloudIcon } from '../../assets/images/soundcloud.svg'
import { ReactComponent as YoutubeMusicIcon } from '../../assets/images/youtube.svg'
import { ReactComponent as DeezerIcon } from '../../assets/images/deezer.svg'
import { ReactComponent as TidalIcon } from '../../assets/images/tidal.svg'
import { ReactComponent as BandcampIcon } from '../../assets/images/bandcamp.svg'

const platformMapping = {
  appleMusic: {
    icon: AppleMusicIcon,
    name: 'Apple Music',
  },
  spotify: {
    icon: SpotifyIcon,
    name: 'Spotify',
  },
  soundcloud: {
    icon: SoundcloudIcon,
    name: 'Soundcloud',
  },
  youtubeMusic: {
    icon: YoutubeMusicIcon,
    name: "Youtube Music",
  },
  deezer: {
    icon: DeezerIcon,
    name: 'Deezer',
  },
  tidal: {
    icon: TidalIcon,
    name: 'Tidal',
  },
  bandcamp: {
    icon: BandcampIcon,
    name: 'Bandcamp',
  }
}

function MusicPlatform(player) {
  const { dispatch } = useMusicPlayer(); 
  const { url, platform } = player
  const currentPlatform = platformMapping[platform]
  const Icon = currentPlatform.icon
  const handleSelectMusicPlayer = (e) => {
    e.preventDefault()

    dispatch({type: "set", payload: player})
  }
  return (
    <li className="music-platform" role="button" onClick={(e) => {handleSelectMusicPlayer(e)}}>
      <a onClick={e => e.stopPropagation()} href={url} target="_blank" className="music-platform__logo">
        <Icon />
      </a>
      <div className="music-platform__details">
        <h3>{currentPlatform.name}</h3>
      </div>
      <Arrow direction={"right"} size="16px" />
    </li>
  );
}

export default MusicPlatform;
