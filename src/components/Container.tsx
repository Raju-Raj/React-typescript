import React from 'react'

type styleProps = {
    styles:React.CSSProperties
}
const Container = (props:styleProps) => {
  return (
    <div style={props.styles}>Container</div>
  )
}

export default Container