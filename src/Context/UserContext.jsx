import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [userLogin, setUserLogin] = useState('')

    const [user, setUser] = useState([])


    fetch('http://localhost:4000/Usuarios',{ 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) => {
            setUser(data)
        })
        .catch ((err)=> console.log(err))



    return (   
         <UserContext.Provider value={{user, setUser, userLogin, setUserLogin}}>
                {children}
         </UserContext.Provider>
    )
}
