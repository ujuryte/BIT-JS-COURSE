import usePageLogin from "./Hooks/usePageLogin";
import useRoute from "./Hooks/useRoute";
import useUser from "./Hooks/useUser";

const { createContext, useEffect } = require("react");

export const Store = createContext();

export const Data = ({children}) => {

    const [displayPage, goToPage, pageSlug] = useRoute();

    const [loginResponse, setLoginRequest] = usePageLogin();

    const[user, setUser] = useUser();

    useEffect(() => {
        if(null === loginResponse){
            return;
        }

        if(loginResponse?.status === 'login-ok'){
            setUser(loginResponse.user)
            goToPage('home')
        }

        if(loginResponse?.status === 'logout-ok'){
            setUser(null)
            goToPage('home')
        }

    },[loginResponse])



    return(
        <Store.Provider value={{
            displayPage, goToPage, pageSlug,
            setLoginRequest, user
        }}>
            {children}
        </Store.Provider>
    )
}