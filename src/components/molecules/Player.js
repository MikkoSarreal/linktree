import React from 'react'

function Player({url}) {
  return (
    <iframe 
      src={url}
      autoPlay
      width="100%"
      height="150px"
      allow="encrypted-media; autoplay;"
      seamless
      frameBorder="0"
      style={{border: 0, borderRadius: '4px'}} />
  );
}

export default Player;
