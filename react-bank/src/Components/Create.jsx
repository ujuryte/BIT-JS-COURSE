import { v4 as uuidv4 } from 'uuid';


export default function Create({ setText, text, setClients }) {

    const userInfo = (e, input) => {
        setText(t => ({ ...t, [input]: e.target.value, balance:0, id: uuidv4() }));
    }

    const submitHandler = () => {
        
    }

    return (
        <div className='create mt-5'>
            <h2>Naujo vartotojo sukurimas</h2>

            <div className="form-container">
                <form className="form" onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label>Vardas</label>
                        <input type="text" className="form-control" value={text.name} onChange={e => userInfo(e, 'name')}/>
                    </div>
                    <div className="mb-3">
                        <label>Pavarde</label>
                        <input type="text" className="form-control" value={text.surname} onChange={e => userInfo(e, 'surname')}/>
                    </div>
                    <button className="btn btn-primary">Sukurti</button>
                </form>
            </div>

        </div>
    )
}