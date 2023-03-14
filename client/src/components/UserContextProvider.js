import React, { useState, useContext } from "react";

const UserContext = React.createContext()

export function useLogged(){
    return useContext(UserContext)
}

export function UserContextProvider({ children }){
    
    const [logged_in, setLoggedIn] = useState(false)

    function toggleLoggedIn(){
        setLoggedIn(checkLog => !checkLog)
    }

    return (
        <UserContext.Provider value={{logged_in, toggleLoggedIn}}>
            { children }
        </UserContext.Provider>
    )
}
