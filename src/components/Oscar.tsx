import React from 'react'

type oscarType = {
    children:React.ReactNode
}
const Oscar = (props:oscarType) => {
  return (
    <div>{props.children}</div>
  )
}

export default Oscar