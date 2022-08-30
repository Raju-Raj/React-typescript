import React,{useState} from 'react';


type authUser={
    name:string,
    email:string
}

const AuthUser = () => {
    const [user,setUse] = useState<authUser>({} as authUser)
    const handleLogin = () => {
        setUse({name:'Raju',email:'raju@gmail.com'})
    }
    const handleLogout = () => {
        setUse({} as authUser)
    }
    
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button><br/>
        <p>user name is {user.name}</p>
        <p>user email is {user.email}</p>
    </div>
  )
}

export default AuthUser

// const AuthUser = () => {
//     const [user,setUse] = useState<authUser|null>(null)
//     const handleLogin = () => {
//         setUse({name:'Raju',email:'raju@gmail.com'})
//     }
//     const handleLogout = () => {
//         setUse(null)
//     }
    
//   return (
//     <div>
//         <button onClick={handleLogin}>Login</button>
//         <button onClick={handleLogout}>Logout</button><br/>
//         <p>user name is {user?.name}</p>
//         <p>user email is {user?.email}</p>
//     </div>
//   )
// }

// export default AuthUser