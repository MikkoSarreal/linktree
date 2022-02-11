import React from 'react'

import profileImage from '../../assets/images/profile-picture.png';
import ProfileTemplate from '../templates/ProfileTemplate';

function ProfilePage() {
  return (
    <ProfileTemplate
      profileImage={profileImage}
      username={"@username"}
      links={[1,2,3,4,5]}
      />
  );
}

export default ProfilePage;
