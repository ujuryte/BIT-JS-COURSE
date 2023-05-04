import { createContext, useEffect } from "react";
import useCreate from "./Hooks/useCreate";
import useCRUD from "./Hooks/useCRUD";
import useDelete from "./Hooks/useDelete";

export const Store = createContext();

export const Data = ({children}) => {

    const [showHideCreateModal, showCreate, hideCreate, colors, addColor, removeAddedColor, addTitle, doCreate, createColor] = useCreate();
    const [crudCreate, readData, crudDelete] = useCRUD();
    const [showDelete, showHideDeleteModal, hideDelete, deleteColor, doDelete, setModalDeleteId]= useDelete();

    useEffect(() => {
        if(null === createColor){
            return;
        }

        crudCreate(createColor);

    },[createColor])

    useEffect(() => {
        if(null === deleteColor){
            return;
        }

        crudDelete(deleteColor);

    },[deleteColor])
    
    return (
        <Store.Provider value={{
            showHideCreateModal, 
            showCreate, 
            hideCreate,
            colors,
            addColor,
            removeAddedColor, 
            addTitle,
            doCreate,
            readData,
            showDelete, showHideDeleteModal, hideDelete,
            doDelete,
            setModalDeleteId
            
        }}>
            {children}
        </Store.Provider>
    )
}