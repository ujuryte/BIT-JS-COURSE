import { useState } from 'react';
import './App.scss';
// import Ganykla from './components/010/Ganykla';



function App() {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState({A:'', B:''});
    const [input1, setInput1] = useState({range: 0, color:'#00ff00'});

    const handleChange1 = e => {
        setText1(e.target.value)
    }

    const handleChange2 = (e,input) => {
        setText2(t => ({...t, [input]:e.target.value}));
    }

    const handleChange3 = (e,input) => {
        setInput1(t => ({...t, [input]:e.target.value}));
    }

    return (
        <div className="App">
            <header className="App-header">
                {/* <Ganykla/> */}

                <h1>Formos</h1>
                <fieldset>
                    <legend>One text one state</legend>
                    <input type='text' value={text1} onChange={handleChange1}></input>
                </fieldset>

                <fieldset>
                    <legend>Two texts one state</legend>
                    <input type='text' value={text2.A} onChange={e => handleChange2(e, 'A')}></input>
                    <input type='text' value={text2.B} onChange={e => handleChange2(e, 'B')}></input>
                </fieldset>

                <fieldset>
                    <legend>One range one Color one state</legend>
                    <input type='range' value={input1.range} onChange={e => handleChange3(e, 'range')}></input>
                    <input type='color' value={input1.color} onChange={e => handleChange3(e, 'color')}></input>
                </fieldset>

            </header>
            {console.clear() || console.log(input1)}
        </div>
    );
}

export default App;