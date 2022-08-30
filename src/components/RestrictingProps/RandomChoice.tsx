import React from 'react';
type RandomNumberType={
    value:number
}
type Positive = RandomNumberType & {
    isPositive:boolean
    isNegitive?:never
    isZero?:never
}
type Negitive = RandomNumberType & {
    isPositive?:never
    isNegitive:boolean
    isZero?:never
}
type zero = RandomNumberType & {
    isPositive?:never
    isNegitive?:never
    isZero:boolean
}

type propTypes = Positive|Negitive|zero

const RandomChoice = ({value,isPositive,isNegitive,isZero}:propTypes) => {
  return (
    <div>
        {value} {isPositive && 'Positive'} {isNegitive && 'Negitive'}  {isZero && 'Zero'}
    </div>
  )
}

export default RandomChoice