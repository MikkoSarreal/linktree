import React, { useState, useEffect } from 'react'

import profileImage from '../../assets/images/profile-picture.png';
import ProfileTemplate from '../templates/ProfileTemplate';
import getUserLinks from '../../api/get-user-links'

function ProfilePage() {
  const [ links, setLinks ] = useState([])

  useEffect(() => {
    (async () => {
      const links = await getUserLinks()
      setLinks(links)
    })()
  }, []);
  
  return (
    <ProfileTemplate
      title={'profile-page'}
      profileImage={profileImage}
      username={"@username"}
      links={links}
      />
  );
}

export default ProfilePage;
