import React from 'react';

type buttonProp = {
    handleProp:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
}

const Button = (props:buttonProp) => {
  return (
    <div>
        <button onClick={(event)=>props.handleProp(event,1)}>Click</button>
    </div>
  )
}

export default Button