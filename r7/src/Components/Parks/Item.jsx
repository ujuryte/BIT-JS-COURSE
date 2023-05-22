import { useContext, useEffect, useState } from "react";
import { Data } from "../../Data";
import validateSubmit, { sanitizeInput } from "../../Validations/parksValidation";

export default function Item({ parks }) {

    const { setDeleteParks, setEditParks, addMessage } = useContext(Data);
    const [delClick, setDelClick] = useState(false);
    const [errors, setErrors] = useState(new Set());

    const [input, setInput] = useState({
        title: '',
        height: '',
        type: 0
    });

    useEffect(() => {
        setInput({
            title: parks.title
        });

    }, [parks]);

    const save = _ => {
        const data = {title: input.title}
        if (!validateSubmit(data, setErrors, addMessage)){
            return;
        };
        setEditParks({
            ...data,
            id: parks.id
        });
        setErrors(new Set());
    }

    const cancel = _ => {
        setInput({
            title: parks.title,
           
        })
        setErrors(new Set())
    }

    const remove = _ => {
        if (delClick) {
            setDeleteParks(parks);
        } else {
            setDelClick(true);
            setTimeout(() => setDelClick(false), 1000);
        }

    }

    const changeInput = (e, prop) => {
        let value = e.target.value;
        value = sanitizeInput(value, prop);
        setInput(i => ({ ...i, [prop]: value }));
    }

    return (
        <div className="list-item">
            <div className="parks info">
                <input parks="text" className={"title" + (errors.has('title') ? ' error' : '')} value={input.title} onChange={e => changeInput(e, 'title')} />
            </div>
            <div className="bottom">
                <div className="buttons">
                    <button className={'small ' + (delClick ? 'yellow' : 'red')} onClick={remove}>remove</button>
                    <button className="small blue" onClick={save}>save</button>
                    <button className="small yellow" onClick={cancel}>cancel</button>
                </div>
            </div>
        </div>
    );

}