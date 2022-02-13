import React from 'react'
import Arrow from '../atoms/Arrow'

function Event({date, url, venue}) {
  return (
    <li>
      <a href={url} target="_blank" className="event">
        <div className="event__details">
            <h3>{date}</h3>
            <p>{venue}</p>
        </div>
        <div className="event__action">
            <Arrow direction={"right"} size="16px" />
        </div>
      </a>
    </li>
  );
}

export default Event;
