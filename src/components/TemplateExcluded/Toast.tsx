import React from 'react';

type HorizentalProps = 'left'|'center'|'right'
type VerticalProps = 'top'|'center'|'bottom'

type ToastProps = {
    position:|Exclude<`${HorizentalProps}-${VerticalProps}`,'center-center'>|'center'
}

const Toast = ({position}:ToastProps) => {
  return (
    <div>Toast Position : {position}</div>
  )
}

export default Toast