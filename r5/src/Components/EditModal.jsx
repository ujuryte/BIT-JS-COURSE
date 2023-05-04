import { useContext, useEffect, useState } from 'react';
import '../Style/create-modal.scss';
import CreateColor from './CreateColor';
import { Store } from '../Store';

export default function EditModal() {

    const {showHideEditModal, hideEdit, oldData, editColors, editColor, editTitle, doEdit} = useContext(Store);

    const [title, setTitle] = useState('');
    const [color, setColor] = useState('#000000');

    const done = _ => {
        doEdit();
        setTitle('');
        setColor('#000000')
    }

    useEffect(() => {
        if(null === oldData){
            return
        }
        setTitle(oldData.title);
        
    },[oldData])

    useEffect(() => {

        editTitle(title);

    }, [title, editTitle])

    const add = _ => {
        editColor(color);
        setColor('#000000');
    }
    
    if(!showHideEditModal){
        return null;
    }

    return (
        <div className="create-modal">
            <div className="create-modal-body">

                <div className="create-modal-title">
                    <input type='text' value={title} onChange={e => setTitle(e.target.value)}/>
                </div>

                <div className="create-modal-colors-bin">

                    <div className="create-modal-color-picker">
                        <input type='color' value={color} onChange={e => setColor(e.target.value)}/>
                        <button onClick={add}>add</button>
                    </div>
                    <div className="create-modal-colors">
                        {
                            editColors === null 
                            ? <h3>No colors</h3>
                            : editColors.map(c => <CreateColor key={c.id} id={c.id} color={c.color} title={c.title} parent="edit"/>)
                        }
                    </div>

                </div>
                <div className="create-modal-bottom">
                    <button onClick={done}>done</button>
                    <button onClick={hideEdit}>cancel</button>
                </div>

            </div>

        </div>
    );

}