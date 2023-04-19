import { useState } from 'react';




export default function Create({setCreateData}) {

const [name,setName] = useState('')
const [surname, setSurname] = useState('')
const [balance, setBalance] = useState(0)

const doName = e => {
    setName(e.target.value)
}

const doSurname = e => {
    setSurname(e.target.value)
}


const create = _ => {
    setCreateData({
        name,
        surname,
        balance
    })
    setName('');
    setSurname('');
    setBalance(0);
}


return (
    <div className='create mt-5'>
        <h2>Naujo vartotojo sukūrimas</h2>
        <div className="form-container">
            <form className="form">
                <div className="mb-3">
                    <label className="me-4">Vardas:</label>
                    <input type="text" name="name" value={name} onChange={doName} />
      
                </div>
                <div className="mb-3">
                    <label className="me-3">Pavardė:</label>
                    <input type="text" value={surname} onChange={doSurname} />
                </div>
                <button className="btn btn-dark" onClick={create}>Sukurti</button>
            </form>
        </div>
    </div>
  );
}
