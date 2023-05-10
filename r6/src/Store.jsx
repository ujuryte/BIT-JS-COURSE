import usePageAdmin from "./Hooks/usePageAdmin";
import usePageLogin from "./Hooks/usePageLogin";
import useRoute from "./Hooks/useRoute";
import useUser from "./Hooks/useUser";

const { createContext, useEffect, useState } = require("react");

export const Store = createContext();

export const Data = ({children}) => {

    const [displayPage, goToPage, pageSlug] = useRoute();

    const [loginResponse, setLoginRequest] = usePageLogin();

    const[user, setUser] = useUser();

    const [adminResponse, adminLoad] = usePageAdmin();

    const [adminPageData, setAdminPageData] = useState(null);

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


    useEffect(() => {
        if(null === adminResponse){
            return;
        }
        if(adminResponse.status === 'ok'){
            setAdminPageData(adminResponse.data)
        }

        
        

    },[adminResponse])

    useEffect(() => {
        switch(pageSlug){
            case 'admin': adminLoad()

            default: 
        }
    }, [pageSlug])



    return(
        <Store.Provider value={{
            displayPage, goToPage, pageSlug,
            setLoginRequest, user,
            adminPageData,
            
        }}>
            {children}
        </Store.Provider>
    )
}