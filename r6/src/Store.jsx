import useMessages from "./Hooks/useMessages";
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

    const [messages, addMessage] = useMessages();

    useEffect(() => {
        if(null === loginResponse){
            return;
        }

        if(loginResponse?.status === 'login-ok'){
            setUser(loginResponse.user);
            addMessage(loginResponse.message);
            goToPage('home')
        }

        if(loginResponse?.status === 'error'){
            addMessage(loginResponse.message)
        }

        if(loginResponse?.status === 'logout-ok'){
            setUser(null)
            addMessage(loginResponse.message)
            goToPage('home')
        }

    },[loginResponse])


    useEffect(() => {
        if(null === adminResponse){
            return;
        }
        if(adminResponse.status === 'ok'){
            setAdminPageData(adminResponse.data)
        } else {
            if(adminResponse.response.status === 401){
                goToPage(401);
            } else {
                goToPage('error');
            }
            
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
            messages
            
        }}>
            {children}
        </Store.Provider>
    )
}