import React from 'react'
import Event from '../molecules/Event';
import HorizontalLine from '../atoms/HorizontalLine'

function Events({events = []}) {
  return (
    <ul className='events'>
      {events.map((event, index) => (
        <React.Fragment key={index}>
          <Event {...event} />
          <HorizontalLine />
        </React.Fragment>
      ))}
    </ul>
  );
}

export default Events;
