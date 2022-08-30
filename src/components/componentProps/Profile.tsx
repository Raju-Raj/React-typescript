import React from 'react'
export type nameProp = {
    name:string
}

const Profile = ({name}:nameProp) => {
  return (
    <div><h1>Welcome To {name}</h1></div>
  )
}

export default Profile