
import './App.css';
import './components/005/animal.scss'
import Fox from './components/005/Fox';
import Racoon from './components/005/Racoon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <h1>Start</h1>

        <Racoon />

        <Fox />

      </header>
    </div>
  );
}

export default App;
