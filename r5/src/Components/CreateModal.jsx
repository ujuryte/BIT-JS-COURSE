import { useContext } from 'react';
import '../Style/create-modal.scss';
import CreateColor from './CreateColor';
import { Store } from '../Store';

export default function CreateModal() {

    const {showHideCreateModal, hideCreate} = useContext(Store);

    if(!showHideCreateModal){
        return null;
    }

    return (
        <div className="create-modal">
            <div className="create-modal-body">

                <div className="create-modal-title">
                    <input type='text' />
                </div>

                <div className="create-modal-colors-bin">

                    <div className="create-modal-color-picker">
                        <input type='color' />
                        <button>add</button>
                    </div>
                    <div className="create-modal-colors">
                        <CreateColor color='skyblue' title='skyblue' />
                        <CreateColor color='pink' title='pink' />
                        <CreateColor color='crimson' title='crimson' />
                    </div>

                </div>
                <div className="create-modal-bottom">
                    <button>done</button>
                    <button onClick={hideCreate}>cancel</button>
                </div>

            </div>

        </div>
    );

}