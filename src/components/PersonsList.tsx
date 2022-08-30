import React from 'react';

type listTypes = {
    details:{
        name:string,
        age:number
    }[]
}

const PersonsList = (props:listTypes) => {
  return (
    <div>
        {
            props.details.map((items)=>(
                <div>
                    <h1>{items.name}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default PersonsList