


export default function Clients({ data}) {

   


    if (null === data) {
        return (
            <h2>LOADING....</h2>
        )
    }

    


    return (
        <div className="container mt-5 list">
            <h2>Registruoti vartotojai</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Vardas</th>
                        <th>Pavardė</th>
                        <th>Sąskaitos likutis</th>
                        <th>Suma</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(c => <tr key={c.id}>
                            <td>{c.name}</td>
                            <td>{c.surname}</td>
                            <td>{c.balance}</td>
                            <td>
                                <div className="input-group">
                                    <span className="input-group-text">$</span>
                                    <input type="number" className="form-control arrows"/>
                                </div>
                            </td>
                            <td>
                                <button className="btn btn-success">Pridėti lėšas</button>
                            </td>
                            <td>
                                <button className="btn btn-warning">Nuskaičiuoti lėšas</button>
                            </td>
                            <td>
                                <button className="btn btn-danger">Ištrinti sąskaitą</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}