import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState([])
    const [password, setPassword] = useState([])
    const [userLogin, setUserLogin] = useState('')


    return (   
         <UserContext.Provider value={{user, setUser, password, setPassword, userLogin, setUserLogin}}>
                {children}
         </UserContext.Provider>
    )
}
