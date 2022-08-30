import React,{useState} from 'react'

const LoggedIn = () => {
    const [logedIn,setLogedIn]= useState(false)
    const handleLogin = () => {
        setLogedIn(true)
    }
    const handleLogout = () => {
        setLogedIn(false)
    }
  return (
    <div>
        User is {logedIn ? 'LoggedIn':'LoggedOut'}<br/>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
    </div>
    
  )
}

export default LoggedIn