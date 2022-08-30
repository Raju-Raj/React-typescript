import React from 'react';

type persoTypes = {
    detail:{
        name:string,
        age:number
    }
}

const Person = (props:persoTypes) => {
  return (
    <div>My name is {props.detail.name} and i am {props.detail.age} years old</div>
  )
}

export default Person