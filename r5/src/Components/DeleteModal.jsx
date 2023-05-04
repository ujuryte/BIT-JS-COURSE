import { useContext } from 'react';
import '../Style/delete-modal.scss';
import { Store } from '../Store';

export default function DeleteModal() {

    const {showHideDeleteModal, hideDelete, doDelete} = useContext(Store);


    // const done = _ => {
    //     doCreate();
    //     setTitle('');
    //     setColor('#000000')
    // }

    
    
    if(!showHideDeleteModal){
        return null;
    }

    return (
        <div className="create-modal">
            <div className="create-modal-body">

                
                <div className="create-modal-bottom">
                    <button onClick={_ => doDelete()}>ok</button>
                    <button onClick={hideDelete}>cancel</button>
                </div>

            </div>

        </div>
    );

}