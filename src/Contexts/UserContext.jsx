import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const ProvideUser =({children}) =>{

   

    const [user,setUser] = useState({
        username: 'tickle122', 
        name: 'Tom Tickle', 
        avatar_url: 'https://vignette.wikia.nocookie.net/mrmen/images/d…r-Tickle-9a.png/revision/latest?cb=20180127221953'
    })

    return <UserContext.Provider value={{user:user, setUser:setUser}}>{children}</UserContext.Provider>
}