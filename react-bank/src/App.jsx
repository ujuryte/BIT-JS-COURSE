
import { useEffect, useState } from 'react';
import './App.scss';
import Clients from './Components/Clients';
import Create from './Components/Create';
import Stat from './Components/Stat';
import { crudCreate, crudRead } from './Utils/localStorage';

const key = 'ClientsBase';

function App() {

  const [data, setData] = useState(null);
  const [createData, setCreateData] = useState(null);
    
  useEffect(() => {
    setData(crudRead(key))
  }, []);

  useEffect(() => {
    if(null === createData){
      return
    }
    crudCreate(key, createData)

  }, [createData])


  return (
    <div className="App">
      <header className="App-header">
        
          <Stat data={data}/>

          
           <Clients data={data}/>
          

          <Create setCreateData={setCreateData}/>
        
      </header>
    </div>
  );
}

export default App;
