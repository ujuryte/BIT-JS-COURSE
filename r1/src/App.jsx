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

      </header>
    </div>
  );
}

export default App;
