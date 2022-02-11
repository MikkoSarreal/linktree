import React from 'react'
import ProfilePhoto from '../atoms/ProfilePhoto';

function UserProfile({username, profileImage}) {
  return (
    <div className='user-profile'>
        <ProfilePhoto>
            <img src={profileImage} alt={username} />
        </ProfilePhoto>
        <h1>{username}</h1>
    </div>
  );
}

export default UserProfile;
