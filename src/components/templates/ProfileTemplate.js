import React from 'react'
import Wrapper from '../atoms/Wrapper';
import UserProfile from '../organisms/UserProfile';
import Links from '../organisms/Links';
import Footer from '../organisms/Footer'

function ProfileTemplate({username, profileImage, links}) {
  return (
    <Wrapper>
      <UserProfile username={username} profileImage={profileImage} />
      <Links links={links} />
      <Footer />
    </Wrapper>
  );
}

export default ProfileTemplate;
