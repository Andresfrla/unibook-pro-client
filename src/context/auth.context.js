import { createContext,  useState } from "react"
import { useEffect } from "react";
import authService from "../services/auth.service";

const AuthContext = createContext();

const AuthProvider = (props) => {

    const  [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ user, setUser ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);


    const storeToken = (token) => {    
        localStorage.setItem('authToken', token);
    }

    const authenticateUser = async () => {
        const storedToken = localStorage.getItem('authToken');
        if(storedToken) {
            try {
                const response = await authService.verify();
                const user = response.data;
                setIsLoggedIn(true);
                setIsLoading(false);
                setUser(user); 
                } catch (error) {
                    setIsLoggedIn(false);
                    setIsLoading(false);
                    setUser(null);  
                }
            try {
                const response = await authService.verifyAdmin();
                const user = response.data;
                setIsLoggedIn(true);
                setIsLoading(false);
                setUser(user);
            } catch (error) {
                setIsLoggedIn(false);
                setIsLoading(false);
                setUser(null);  
            }

        } else {
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);  
        }
    }

    useEffect(() => {
        authenticateUser()
    }, [])


    const removeToken = () => {
        localStorage.removeItem('authToken')
    }

    const logout = () => {
        removeToken()
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);  
    }

    return (
        <AuthContext.Provider 
            value={{ 
                isLoggedIn, 
                user, 
                isLoading, 
                storeToken,
                authenticateUser,
                logout
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export {AuthContext, AuthProvider }