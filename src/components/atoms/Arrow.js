import React from 'react'
import { ReactComponent as SvgLogo } from '../../assets/images/arrow.svg';

const rotation = {
  up: "rotate(180deg)",
  right: "rotate(270deg)",
  down: "rotate(0)",
  left: "rotate(90deg)"
}

function Arrow({direction = "down", size="12px"}) {
  return (
    <SvgLogo 
      className="arrow" 
      style={{ 
        transform: rotation[direction],
        width: size,
        height: size
      }} 
      />
  );
}

export default Arrow;
