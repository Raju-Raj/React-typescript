import React from 'react'

type statusType = {
    status:"loading"|"success"|"error"
}
const Status = (props:statusType) => {
    let message;
    if(props.status==="loading"){
        message="Loading"
    }else if(props.status==="success"){
        message ="Fetch Successfull"
    }else if(props.status==="error"){
        message ="Error"
    }
  return (
    <div>{message}</div>
  )
}

export default Status