import Edit from "./Edit"


export default function Clients({ data, setEditData, setDeleteData, msg }) {


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
                {data.sort((a, b) => a.surname.localeCompare(b.surname)).map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.surname}</td>
              <td>{(c.balance).toFixed(2)}</td>
              
              <Edit c={c} setEditData={setEditData} setDeleteData={setDeleteData} msg={msg}/>
            </tr>
          ))}
                </tbody>
            </table>
        </div>
    )
}