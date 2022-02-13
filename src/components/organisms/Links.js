import React from 'react'
import Link from '../molecules/Link';

function Links({links = []}) {
  return (
    <ul className='links'>
      {links.map((link, index) => (
        <Link key={index} {...link} />
      ))}
    </ul>
  );
}

export default Links;
