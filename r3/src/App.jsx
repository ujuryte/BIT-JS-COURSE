import { useState } from 'react';
import axios from 'axios';
import './App.scss';
import { useEffect } from 'react';

function App() {
  
  const [animal, setAnimal] = useState('');

  useEffect(() => {

    axios.get('http://localhost:3003/animals/lape')
    .then(res => {
      console.log(res);

      setAnimal(res.data.text)
    })

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Server</h1>

        <h1>Hello, {animal}!</h1>

      </header>
    </div>
  );
}

export default App;
