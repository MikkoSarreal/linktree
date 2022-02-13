import React from 'react'
import Wrapper from '../atoms/Wrapper';
import UserProfile from '../organisms/UserProfile';
import Links from '../organisms/Links';
import Footer from '../organisms/Footer'
import { MusicPlayerProvider } from '../../contexts/music-player-context'

function ProfileTemplate({username, profileImage, links}) {
  return (
    <MusicPlayerProvider>
      <Wrapper>
        <UserProfile username={username} profileImage={profileImage} />
        <Links links={links} />
        <Footer />
      </Wrapper>
    </MusicPlayerProvider>
  );
}

export default ProfileTemplate;
