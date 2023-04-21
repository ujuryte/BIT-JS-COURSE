
import { useEffect, useState } from 'react';
import './App.scss';
import Clients from './Components/Clients';
import Create from './Components/Create';
import Stat from './Components/Stat';
import { crudCreate, crudDelete, crudRead, crudUpdate } from './Utils/localStorage';
import { bank } from './Components/Icon';


const key = 'ClientsBase';

function App() {

  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
  const [data, setData] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  
 
  
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

  useEffect(() => {
    if (null === editData) {
      return;
    }
    crudUpdate(key, editData, editData.id); 
    setLastUpdateTime(Date.now()); 
  }, [editData]);

  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    crudDelete(key, deleteData.id);
    setLastUpdateTime(Date.now());
  }, [deleteData])


  return (
    <>

      <div className="container">

        <div className='row'>

          <div className='table-col col-8'>
            <div className='title'>
              <div>{bank}</div>
              <h2 >Bankas ver. 1</h2>
            </div>
            <Clients data={data} setEditData={setEditData} setDeleteData={setDeleteData}/>
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
