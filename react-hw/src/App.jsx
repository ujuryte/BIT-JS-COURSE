import './App.scss';
import Dogs1 from './Components/04-05/Dogs1';
import Dogs2 from './Components/04-05/Dogs2';
import Dogs3 from './Components/04-05/Dogs3';
import Dogs4 from './Components/04-05/Dogs4';
import Dogs5 from './Components/04-05/Dogs5';



function App() {

    const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    const dogElements = dogs
        .filter(dog => /^[A-Z + Š]/.test(dog) - 1)
        .map((dog, index) => <Dogs4 key={index} doggo={dog} />);

    return (
        <div className="App">
            <header className="App-header">

                <div className='squares'>
                    {
                        dogs.map((d, i) => <Dogs1 key={i} dog={d} />)
                    }
                </div>

                <div className='circles'>
                    {
                        [...dogs].sort((a, b) => b.length - a.length).map((d, i) => <Dogs2 key={i} dogz={d} num={i + 1} />)
                    }

                </div>

                <div className='squares circles'>
                    {
                        dogs.map((d, i) => <Dogs3 key={i} god={d} index={i} />)
                    }
                </div>

                
                <div>{dogElements}</div>

                <div>
                    {
                        dogs.map((d, i) => <Dogs5 key={i} numbers={d.length} />)
                    }
                </div>
                

            </header>
        </div>
    );
}

export default App;
