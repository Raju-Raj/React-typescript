import React from 'react'

type greetType = {
    name:string,
    age?:number,
    isLogged:boolean
}

const Greet = (props:greetType) => {
  return (
    <div>
      {
        props.isLogged ? <h2>Welcome {props.name}! you have {props.age} unread meassages</h2> :<h2>Welcome guest</h2>
      }
    </div>
  )
}

export default Greet
