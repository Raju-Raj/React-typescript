import React from 'react';

type InputProp = {
    value:string,
    handleProp:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

const Input = (props:InputProp) => {
  return (
    <div>
        <input type="text" value={props.value} onChange={props.handleProp}/>
    </div>
  )
}

export default Input