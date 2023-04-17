
import { useEffect, useState } from 'react';
import './App.scss';
import Clients from './Components/Clients';
import Create from './Components/Create';
import Stat from './Components/Stat';

const clients = [
  {name: 'Jonas', surname: 'Jonaitis', balance: 1, id: 1}
]

function App() {

  const [cl, setClients] = useState(clients);
  const [text2, setText2] = useState({name:'', surname:''});



  useEffect(() => {
    if(null !== localStorage.getItem('text2')){
        setText2(JSON.parse(localStorage.getItem('text2')))
    } else {
        setText2([])
    }
}, [])

useEffect(() => {
    if(null === text2){
        return;
    } 
    localStorage.setItem('text2', JSON.stringify(text2))

}, [text2]);


  return (
    <div className="App">
      <header className="App-header">
        
          <Stat cl={cl} />

          {
            cl.map(c => <Clients key={c.id} data={c} setClients={setClients}/>)
          }
          
          <Create setText={setText2} text={text2} setClients={setClients}/>
        
      </header>
    </div>
  );
}

export default App;
