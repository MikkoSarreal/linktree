import React from 'react'

function Wrapper({children, title}) {
  return (
    <div title={title} className="wrapper">
      {children}
    </div>
  );
}

export default Wrapper;
