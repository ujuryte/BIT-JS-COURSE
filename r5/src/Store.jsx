import { createContext, useEffect } from "react";
import useCreate from "./Hooks/useCreate";
import useCRUD from "./Hooks/useCRUD";
import useDelete from "./Hooks/useDelete";
import useEdit from "./Hooks/useEdit";

export const Store = createContext();

export const Data = ({children}) => {

    const [showHideCreateModal, showCreate, hideCreate, colors, addColor, removeAddedColor, addTitle, doCreate, createColor] = useCreate();
    const [crudCreate, readData, crudDelete, crudEdit] = useCRUD();
    const [showDelete, showHideDeleteModal, hideDelete, deleteColor, doDelete, setModalDeleteId]= useDelete();

    const [showHideEditModal, hideEdit,showEdit, setModalEditData, oldData, editColors, editTitle, addEColor, removeEColor, removeEditedColor, doEdit, editColor] = useEdit();

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

    useEffect(() => {
        if(null === editColor){
            return;
        }

        crudEdit(editColor);

    },[editColor])
    
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
            setModalDeleteId,
            showEdit, setModalEditData,
            oldData,
            editColors, editTitle,
            addEColor, removeEColor,
            removeEditedColor,
            doEdit,
            showHideEditModal, hideEdit, editColor
            
        }}>
            {children}
        </Store.Provider>
    )
}