import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function useMessages() {
    
    const [msg, setMsg] = useState([]);

    const removeMessage = id => {
        msg.forEach(m => m.id === id ? clearInterval(m.timer) : '');
        setMsg(m => m.filter(m=> m.id !== id));
    }

    const addSecond = id => {
        setMsg(m => m.map(m => m.id === id ? {...m, seconds: m.seconds + 1} : {...m}));
        msg.forEach(m => m.seconds > 60 ? removeMessage(id) : '')
    }

    const addMessage = (m) => {
        const id = uuidv4();

        const msg = {
            id,
            type: m.type,
            title: m.title,
            text: m.text,
            seconds: 0,
            timer: setInterval(() => addSecond(id, 1000))
        }
        setMsg(m => [...m, msg]);
    } 

       

    return [msg, addMessage, removeMessage];
}