import { createContext,  useState , useEffect} from "react"
import authService from "../services/auth.service";

const AuthContext = createContext();

const AuthProvider = (props) => {

    const  [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ user, setUser ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ role, setRole ] = useState(null)

    const storeToken = (token) => {    
        localStorage.setItem('authToken', token);
    }

    const authenticateUser = async () => {
        const storedToken = localStorage.getItem('authToken');
        if(storedToken) {
            try {
                const response = await authService.verify();
                const user = response.data;
                console.log("user: ", user)
                setIsLoggedIn(true);
                setIsLoading(false);
                setUser(user); 
                setRole(user.role)
                } catch (error) {
                    setIsLoggedIn(false);
                    setIsLoading(false);
                    setUser(null);
                    setRole(null);  
                }

        } else {
            setIsLoggedIn(false);
            setIsLoading(false);
            setUser(null);
            setRole(null);  
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
        setRole(null)
    }

    return (
        <AuthContext.Provider 
            value={{ 
                isLoggedIn, 
                user,
                role, 
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