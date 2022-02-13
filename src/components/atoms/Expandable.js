import React from 'react'

function Expandable({active = false, children}) {
  return (
    <div className={`expandable ${active ? 'expandable--expanded': ''}`}>
        {children}
    </div>
  );
}

export default Expandable;
