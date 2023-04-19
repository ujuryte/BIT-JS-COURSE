
import { useEffect, useState } from 'react';
import './App.scss';
import Clients from './Components/Clients';
import Create from './Components/Create';
import Stat from './Components/Stat';
import { crudCreate, crudRead } from './Utils/localStorage';
import { bank } from './Components/Icon';

const key = 'ClientsBase';

function App() {

  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
  const [data, setData] = useState(null);
  const [createData, setCreateData] = useState(null);
  
 
  
  useEffect(() => {
    setData(crudRead(key))
  }, [lastUpdateTime]);


  useEffect(() => {
    if (null === createData) {
      return
    }
    crudCreate(key, createData)
    setLastUpdateTime(Date.now());

  }, [createData])

  


  return (
    <>

      <div className="container">

        <div className='row'>

          <div className='table-col col-8'>
            <div className='title'>
              <div>{bank}</div>
              <h2 >Bankas ver. 1</h2>
            </div>
            <Clients data={data}/>
          </div>
          <div className='col-4 p-4'>
            <Stat data={data} />
            <Create setCreateData={setCreateData}/>
          </div>
        </div>

      </div>

    </>

  );
}

export default App;
