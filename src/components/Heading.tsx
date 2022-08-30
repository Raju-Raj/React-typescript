import React from 'react';

type head={
    children:string
}

const Heading = (props:head) => {
  return (
    <h1>{props.children}</h1>
  )
}

export default Heading