import React, { useState } from 'react'
import BySongkickLogo from '../atoms/BySongKickLogo'
import Expandable from '../atoms/Expandable'
import Events from '../organisms/Events'

function ShowsList({data, children}) {
  const [active, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!active)
  }

  const button = React.cloneElement(children, { onClick: handleToggle })

  return (
    <div className='shows-list'>
      {button}
      <Expandable active={active}>
        <Events events={data.upcomingEvents} />
        <BySongkickLogo />
      </Expandable>
    </div>
  );
}

export default ShowsList;
