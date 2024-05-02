import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  
    const [user, setUser] = useState([{ 
            username: 'Wesley',
            email: 'wesley@teste.com', 
            password: '123' 
        },

    ])

    const [userLogin, setUserLogin] = useState('')


    return (   
         <UserContext.Provider value={{user, setUser, userLogin, setUserLogin}}>
                {children}
         </UserContext.Provider>
    )
}
