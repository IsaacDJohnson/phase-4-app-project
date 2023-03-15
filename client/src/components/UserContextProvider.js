import React, { useState, useContext } from "react";

const UserContext = React.createContext()
const UserContextUpdate = React.createContext()


export function useLogged(){
    return useContext(UserContext)
}

export function useLoggedUpdate(){
    return useContext(UserContextUpdate)
}


export function UserContextProvider({ children }){

    const [logged_in, setLoggedIn] = useState(false)

    function toggleLoggedIn(){
        setLoggedIn(checkLogged => !checkLogged)
    }

    return (
        <UserContext.Provider value={logged_in}>
            <UserContextUpdate.Provider value={toggleLoggedIn}>
                { children }
            </UserContextUpdate.Provider>
        </UserContext.Provider>
    )
}
