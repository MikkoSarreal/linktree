import React from 'react'
import Button from '../atoms/Button';

function Links({links = []}) {
  return (
    <ul className='links'>
      {links.map((link, index) => (
        <li>
          <Button key={index}>Hi</Button>
        </li>
      ))}
    </ul>
  );
}

export default Links;
