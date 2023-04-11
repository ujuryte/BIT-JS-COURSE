export default function Clients({data,setClients}) {

    const deletion = _ => {
        setClients(c => data.balance === 0 ? c.filter(c => data.id !== c.id) : c)
    }

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

                    <tr>
                        <td>{data.name}</td>
                        <td>{data.surname}</td>
                        <td>{data.balance}</td>
                        <td>
                            <div class="input-group">
                                <span class="input-group-text">$</span>
                                <input type="text" class="form-control"/>
                            </div>
                        </td>
                        <td>
                            <button className="btn btn-success">Prideti lesas</button>
                        </td>
                        <td>
                            <button className="btn btn-warning">Nuskaiciuoti lesas</button>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={deletion}>Istrinti saskaita</button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}