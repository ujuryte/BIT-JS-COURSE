import { useState } from 'react';
import './App.scss';
import ReactState3 from './Components/04-12/ReactState3';
import ReactState4 from './Components/04-12/ReactState4';
import ReactState5 from './Components/04-12/ReactState5';


let base = 0;

function App() {

    const [count, setCount] = useState(base)

    const plus = _ => {
        setCount(count + 1)
    }

    const minus = _ => {
        setCount(count - 3)
    }

    const [sq, setSquare] = useState([]);

    const add = _ => {
        setSquare(s => [...s,{color: 'skyblue', show: true}])
    }

    const [sq2, setSq] = useState([]);

    const red = _ => {
        setSq(s => [...s,{color: 'darkred', show: true}])
    }

    const blue = _ => {
        setSq(s => [...s,{color: 'skyblue', show: true}])
    }



    return (
        <div className="App">
            <header className="App-header">

                <div className='squares'>
                    <ReactState3 base={count} />
                </div>

                <div>
                    <button className='pink' onClick={plus}>+1</button>
                    <button className='blue' onClick={minus}>-3</button>
                </div>

                <div className='squares'>
                    {
                        sq.map((s, i) => s.show ? <ReactState4 key={i} data={s}/> : null)
                    }
                </div>

                <div>
                    <button className='green' onClick={add}>Add Square</button>
                </div>

                <div className='squares'>
                    {
                        sq2.map((s,i) => s.show ? <ReactState5 key={i} data={s}/> : null)
                    }
                </div>

                <div>
                    <button className='yellow' onClick={red}>Add red</button>
                    <button className='pink' onClick={blue}>Add blue</button>
                    <button className='red' onClick={_ => setSq([])}>Reset</button>
                </div>

            </header>
        </div>
    );
}

export default App;