import { useState } from "react";

export default function useDelete() {

    const [show, setShow] = useState(false);
    const [color, setColor] = useState(null);
    const [id, setId] = useState(0);
    

    const showDelete = _ => {
        setShow(true);
    };

    const hideDelete = _ => {
        setShow(false);
    };

    const setModalDeleteId = id =>{
        setId(id);
    }

    const doDelete = _ => {
        setColor({id});
        
    }

    return [show, showDelete, hideDelete, color, doDelete, setModalDeleteId]
}