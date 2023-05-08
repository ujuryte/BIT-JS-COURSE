import useRoute from "./Hooks/useRoute";

const { createContext } = require("react");

export const Store = createContext();

export const Data = ({children}) => {

    const [displayPage, goToPage, pageSlug] = useRoute();

    return(
        <Store.Provider value={{
            displayPage, goToPage, pageSlug
        }}>
            {children}
        </Store.Provider>
    )
}