import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const API_URL = 'https://www.thecolorapi.com/id?hex=';

export default function useEdit() {

    const [show, setShow] = useState(false);


    const [colors, setColors] = useState(null);
    const [title, setTitle] = useState('');
    const [id, setId] = useState(0);
    const [oldData, setOldData] = useState(0);
    const [color, setColor] = useState(null)


    const showEdit = _ => setShow(true);
    const hideEdit = _ => setShow(false);

    const addTitle = useCallback(t => setTitle(t), [setTitle]);

    const setModalEditData = data => {
        setOldData(data);
        setColors(data.colors);
        setId(data.id)

    }


    const doEdit = _ => {
        const color = {
            title,
            colors,
            id
        }
        setColor(color);
        setShow(false);
        setTitle('');
        setColors(null);
        setId(0)
    }



    const addEColor = hex => {
        const id = uuidv4();
        axios.get(API_URL + hex.substring(1))
        .then(res => {
            // console.log(res.data);
            setColors(c => c.map(c => c.id === id ? {...c, title: res.data.name.value} : {...c}));
        });
        setColors(c => [...c ?? [], {id, color: hex}]);
    }

    const removeEColor = id => {
        setColors(c => {
            const colors = c.filter(c => c.id !== id);
            return colors.length ? colors : null;
        });
    }




    // return [show, showCreate, hideCreate, colors, addColor, removeColor, addTitle, doCreate, color];

    return [show, hideEdit, showEdit, setModalEditData, oldData, colors, addEColor, removeEColor, doEdit];
}