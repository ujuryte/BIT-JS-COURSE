import { useReducer, useState } from "react";
import { createContext } from "react";
import reducer from "./reducer";
import { useEffect } from "react";
import axios from 'axios';
import { loadFromServer } from "./actions";


export const Store = createContext();

const sorts = [
    ['Recommended', 'default'],
    ['Price high to low', 'price_desc'],
    ['Price low to high', 'price_asc'],
    ['Title', 'title'],
    ['Author', 'author']
]

export const StoreProvider = props => {

    const [books, dispachBooks] = useReducer(reducer, null);
    const [types, setTypes] = useState(null);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
        .then(res => {
            dispachBooks(loadFromServer(res.data))
        })
        .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/types/')
        .then(res => setTypes(res.data))
        .catch(error => console.log(error))
    }, [])

    return (
        <Store.Provider value={{
            books, dispachBooks,
            types,
            sorts
        }}>
            {props.children}
        </Store.Provider>
    );
}