import { useCallback, useState } from "react";
import Home from "../Pages/Home";
import Admin from "../Pages/Admin";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Error from "../Pages/Error";

export default function useRoute() {

    const [displayPage, setDisplayPage] = useState(<Home />);
    const [pageSlug, setPageSlug] = useState('home');

    const goToPage = useCallback(page => {
        switch (page) {
            case 'home': setDisplayPage(<Home />);
                break;

            case 'admin': setDisplayPage(<Admin />);
                break;

            case 'login': setDisplayPage(<Login />);
                break;
                
            case 'profile': setDisplayPage(<Profile />);
                break;
            
            case 401: setDisplayPage(<Error error={401} />);
                break;  

            default: setDisplayPage(<Error />)
        }

        setPageSlug(page);


    }, [])

    return [displayPage, goToPage, pageSlug];
}