export default function Create() {
    return (
        <div className='create mt-5'>
            <h2>Naujo vartotojo sukurimas</h2>
            
            <div className="form-container">
            <form className="form">
                <div className="mb-3">
                    <label>Vardas</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label>Pavarde</label>
                    <input type="text" className="form-control"/>
                </div>
                <button className="btn btn-primary">Sukurti</button>
            </form>
            </div>
            
        </div>
    )
}