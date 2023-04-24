import { useState } from 'react';
import './App.scss';
import Azuolas from './Components/04-12/Azuolas';
import Berzas from './Components/04-12/Berzas';
import Uosis from './Components/04-12/Uosis';



function App() {

const [tree, setTree] = useState([])

const azuol = _ => {
    setTree(s => [...s, {type: 'azuolas', show: true}])
}

    return (
        <div className="App">
            <header className="App-header">

                <div className='field'>
                    <Azuolas tree={tree}/>
                    <Berzas />
                    <Uosis />
                </div>
                <div>
                    <button className='red' onClick={azuol}>Azuolas</button>
                    <button className='red'>Berzas</button>
                    <button className='red'>Uosis</button>
                </div>

            </header>
        </div>
    );
}

export default App;