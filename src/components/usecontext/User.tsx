import React,{useContext} from 'react'
import { UserContextProvider } from './UserContext'

const User = () => {
    const context= useContext(UserContextProvider)
    const useLoggedIn=()=>{
        context.setUser({
            name:'raju',
            email:'raju@gmail.com'
        })
    }
    const useLoggedOut=()=>{
        context.setUser(null)
    }
  return (
    <div>
        <button onClick={useLoggedIn}>Login</button>
        <button onClick={useLoggedOut}>Logout</button>
        <p>user name is {context.user?.name}</p>
        <p>user email is {context.user?.email}</p>
    </div>
  )
}

export default User