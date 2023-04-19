export default function Clients({data}) {

    if (null === data) {
        return (
            <h2>LOADING....</h2>
        )
    }

    // const deletion = _ => {
    //     data(c => data.balance === 0 ? c.filter(c => data.id !== c.id) : c)
    // }

    return (
        <div className="container mt-5">
            <h2>Registruoti vartotojai</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Vardas</th>
                        <th>Pavarde</th>
                        <th>Saskaitos likutis</th>
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
                                    <input type="text" className="form-control"/>
                                </div>
                            </td>
                            <td>
                                <button className="btn btn-success">Prideti lesas</button>
                            </td>
                            <td>
                                <button className="btn btn-warning">Nuskaiciuoti lesas</button>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={c => c.balance === 0 ? data.filter(c => c.id !== data.id) : c}>Istrinti saskaita</button>
                            </td>
                        </tr>)
                    }

                    

                </tbody>
            </table>
        </div>
    )
}