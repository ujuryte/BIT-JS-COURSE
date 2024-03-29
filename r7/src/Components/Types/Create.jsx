import { useContext, useState } from 'react';
import { Data } from '../../Data';
import validateSubmit, { sanitizeInput } from "../../Validations/typesValidation";


export default function Create() {

    const { setCreateTypes, parks, addMessage } = useContext(Data);

    const [errors, setErrors] = useState(new Set());

    const [input, setInput] = useState({
        title: '',
        park: 0
    });

    const changeInput = (e, prop) => {
        let value = e.target.value;
        value = sanitizeInput(value, prop);
        setInput(i => ({...i, [prop]: value}));
    }

    const create = _ => {
        const data = {
            title: input.title,
           park: input.park
        };
        if (!validateSubmit(data, setErrors, addMessage)){
            return;
        };

        setCreateTypes(data);
        setInput({
            title: '',
            park: 0
        });
        setErrors(new Set());
    }

    const remError = prop => {
        setErrors(e => {
            const copy = new Set([...e]);
            copy.delete(prop)
            return copy;
        })
    }

    return (
        <div className="card m-3">
            <h2 className="card-header color-yellow">Create new type</h2>
            <div className="card-body">
                <h5 className="card-title color-gray">Save the planet. Add more types!</h5>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label">Type title</label>
                                <input type="text" onFocus={_ => remError('title')} className={"form-control" + (errors.has('title') ? ' error' : '')} value={input.title} onChange={e => changeInput(e, 'title')} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Park Type</label>
                                <select onFocus={_ => remError('park')} className={"form-control" + (errors.has('park') ? ' error' : '')} value={input.type}   onChange={e => changeInput(e, 'park')}>
                                    <option key={0} value={0}>Select park</option>
                                    {
                                        parks?.map(p => <option key={p.id} value={p.id}>{p.title}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="button" className="green" onClick={create}>create!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}