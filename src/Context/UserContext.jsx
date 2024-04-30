import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState('ley')
   
    return (   
         <UserContext.Provider value={{user, setUser}}>
                {children}
         </UserContext.Provider>
    )
}
