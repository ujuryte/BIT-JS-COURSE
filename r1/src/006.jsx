import './App.scss';
import Square from './components/006/square';

const data = [
    {color: '#87ceeb', letter: 1},
    {color: '#dc143c', letter: 2},
    {color: '#ac141c', letter: 4},
    {color: '#gb141c', letter: 22},
    {color: '#ff7f50', letter: 3}
];

function App() {

    const print = color => {
        console.log('%c ' + color, `background:${color}; padding: 5px`)
    }

  return (
    <div className="App">
      <header className="App-header">
       
        <div className="squares">
            {/* <Square niceColor="#87ceeb" letter={1}/>
            <Square niceColor="#dc143c" letter={2}/>
            <Square niceColor="#ff7f50" letter={3}/> */}
            {
                data.map((d,index) => <Square key={index} niceColor={d.color} letter={d.letter} />)
            }
        </div>

        <div className="squares">
    
            {
                data.map((d,index) => d.letter > 5 
                ? null 
                : <Square key={index} niceColor={d.color} letter={d.letter} />)
            }
        </div>
        
        <div className="squares">
           
            {
                [...data].sort((a,b) => b.letter - a.letter).map((d,index) => <Square key={index} niceColor={d.color} letter={d.letter} />)
            }
        </div>

        <div className="squares">
           
           <button onClick={_ => print('gray')}>GREY</button>
           <button className='red' onClick={_ => print('crimson')}>RED</button>
           <button className='pink' onClick={_ => print('pink')}>PINK</button>
           <button className='blue' onClick={_ => print('skyblue')}>BLUE</button>
           <button className='green' onClick={_ => print('greenyellow')}>GREEN</button>
           <button className='yellow' onClick={_ => print('darkorange')}>YELLOW</button>

       </div>
        

      </header>
    </div>
  );
}

export default App;
