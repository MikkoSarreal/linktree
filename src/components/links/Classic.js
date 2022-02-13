import React from 'react'

function Classic({data, children}) {
  return (
    <a href={data.url} target="_blank">{children}</a>
  );
}

export default Classic;
