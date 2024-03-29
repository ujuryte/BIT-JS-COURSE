import './App.scss';
import Bala from './Components/04-07/Bala';
import Tvenkinys from './Components/04-07/Tvenkinys';


function App() {

    const seaPlaners = [
        {id: 1, type: 'man', name: 'Lina', color: 'blue'},
        {id: 2, type: 'car', name: 'Opel', color: 'red'},
        {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
        {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
        {id: 5, type: 'man', name: 'Tomas', color: 'green'},
        {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
        {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
        {id: 8, type: 'car', name: 'MB', color: 'blue'},
        {id: 9, type: 'car', name: 'ZIL', color: 'red'},
        {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
      ];
      

    return (
        <div className="App">
            <header className="App-header">
            
            <div className='arrays'>
            {
                seaPlaners.map((d, i) => <Bala key={i} props={d} />)
            } 
            </div>

            <div className='arrays'>
                {
                    seaPlaners.map((d, i) => d.id % 2 === 0 ? <Tvenkinys key={i} props={d} /> : null)
                }
            </div>

            <div className='arrays'>
                {
                    seaPlaners.map((d, i) => d.id % 2 !== 0 ? <Tvenkinys key={i} props={d} /> : null)
                }
            </div>
                     
               
            

            </header>
        </div>
    );
}

export default App;