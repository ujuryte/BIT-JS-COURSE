import { useState } from 'react';




export default function Create({setCreateData}) {

const [name,setName] = useState('')
const [surname, setSurname] = useState('')

const doName = e => {
    setName(e.target.value)
}

const doSurname = e => {
    setSurname(e.target.value)
}

const create = _ => {
    setCreateData({
        name,
        surname
    })
    setName('');
    setSurname('');
}


return (
    <div className='create mt-5'>
        <h2>Naujo vartotojo sukurimas</h2>
        <div className="form-container">
            <form className="form">
                <div className="mb-3">
                    <label className="me-4">Vardas:</label>
                    <input type="text" name="name" value={name} onChange={doName} />
      
                </div>
                <div className="mb-3">
                    <label className="me-3">Pavarde:</label>
                    <input type="text" name="surname" value={surname} onChange={doSurname} />
                </div>
                <button className="btn btn-primary" onClick={create}>Sukurti</button>
            </form>
        </div>
    </div>
  );
}
