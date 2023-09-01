import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false); 
    const [ user, setUser ] = useState(null);
    const [ isLoading, setIsLoading ] = useState();


    return <AuthContext.Provider value={{isLoggedIn, user, isLoading }}>
        {props.children}
    </AuthContext.Provider>
}

export { AuthContext, AuthProvider}