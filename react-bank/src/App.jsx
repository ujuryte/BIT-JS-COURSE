
import { useEffect, useState } from 'react';
import './App.scss';
import Clients from './Components/Clients';
import Create from './Components/Create';
import Stat from './Components/Stat';

const clients = [
  {name: 'Jonas', surname: 'Jonaitis', balance: 1, id: 1}
]

function App() {

  const [cl, setClients] = useState([]);
  // const [text2, setText2] = useState({name:'', surname:''});



  useEffect(() => {
    if(null !== localStorage.getItem('formData')){
        setClients(JSON.parse(localStorage.getItem('formData')))
    } else {
      setClients([])
    }
}, [])

useEffect(() => {
    if(null === cl){
        return;
    } 
    localStorage.setItem('formData', JSON.stringify(cl))

}, [cl]);


  return (
    <div className="App">
      <header className="App-header">
        
          <Stat cl={cl} />

          {
            cl.map(c => <Clients key={c.id} data={c} setClients={setClients}/>)
          }
          
          {/* <Create setText={setText2} text={text2} setClients={setClients}/> */}

          <Create />
        
      </header>
    </div>
  );
}

export default App;
