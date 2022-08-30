import React,{createContext, useState} from "react";

type userType = {
    name:string,
    email:string
}

type childrenType = {
    children:React.ReactNode
}
type userContextType ={ user: userType | null; setUser: React.Dispatch<React.SetStateAction<userType | null>>; }

export const UserContextProvider = createContext({} as userContextType)

const UserContext = ({children}:childrenType) => {
    const [user,setUser] = useState<userType|null>({} as userType)
    return (
    <UserContextProvider.Provider value={{user,setUser}}>
        {children}
    </UserContextProvider.Provider>
    )
}

export default UserContext