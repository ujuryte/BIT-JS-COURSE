import { useState } from 'react';
import './App.scss';

const list = [
    { id: 123, name: 'Beaver' },
    { id: 124, name: 'Fox' },
    { id: 125, name: 'Rabbit' },
    { id: 126, name: 'Wolf' }
]

function App() {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState({ A: '', B: '' });
    const [input1, setInput1] = useState({ range: 0, color: '#00ff00' });
    const [select, setSelect] = useState(124);
    const [checkbox, setCheckbox] = useState({
        A: false,
        B: true,
        C: true,
        D: false
    });

    const [radio, setRadio] = useState('B');

    const handleChange1 = e => {
        setText1(e.target.value)
    }

    const handleChange2 = (e, input) => {
        setText2(t => ({ ...t, [input]: e.target.value }));
    }

    const handleChange3 = (e, input) => {
        setInput1(t => ({ ...t, [input]: e.target.value }));
    }

    const handleChange4 = cb =>{
        setCheckbox(c => ({...c, [cb]: !c[cb]}))
    }
    const handleChange5 = r =>{
        setRadio(r)
    }


    return (
        <div className="App">
            <header className="App-header">
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

                <fieldset>
                    {/* <legend>Selected:{list.find(l => parseInt(select) === l.id).name}</legend> */}
                    {/* eslint-disable-next-line */}
                    <legend>Selected:{list.find(l => select == l.id).name}</legend>
                    <select value={select} onChange={e => setSelect(e.target.value)}>
                        {
                            list.map(o => <option key={o.id} value={o.id}>{o.name}</option>)
                        }
                    </select>
                </fieldset>

                <fieldset>
                    <legend>4 Checkbox One State</legend>
                    <div>
                        <input id='_A' type='checkbox' onChange={_ => handleChange4('A')} checked={checkbox.A}></input>
                        <label htmlFor='_A' >A</label>
                    </div>
                    <div>
                        <input id='_B' type='checkbox' onChange={_ => handleChange4('B')} checked={checkbox.B}></input>
                        <label htmlFor='_B'>B</label>
                    </div>
                    <div>
                        <input id='_C' type='checkbox' onChange={_ => handleChange4('C')} checked={checkbox.C}></input>
                        <label htmlFor='_C'>C</label>
                    </div>
                    <div>
                        <input id='_D' type='checkbox' onChange={_ => handleChange4('D')} checked={checkbox.D}></input>
                        <label htmlFor='_D'>D</label>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>4 Radio One State</legend>
                    <div>
                        <input id='_Ar' type='checkbox' onChange={_ => handleChange5('A')} checked={radio === 'A'}></input>
                        <label htmlFor='_Ar' >A</label>
                    </div>
                    <div>
                        <input id='_Br' type='checkbox' onChange={_ => handleChange5('B')} checked={radio === 'B'}></input>
                        <label htmlFor='_Br'>B</label>
                    </div>
                    <div>
                        <input id='_Cr' type='checkbox' onChange={_ => handleChange5('C')} checked={radio === 'C'}></input>
                        <label htmlFor='_Cr'>C</label>
                    </div>
                    <div>
                        <input id='_Dr' type='checkbox' onChange={_ => handleChange5('D')} checked={radio === 'D'}></input>
                        <label htmlFor='_Dr'>D</label>
                    </div>
                </fieldset>

            </header>
            {/* {console.clear() || console.log(checkbox)} */}
        </div>
    );
}

export default App;