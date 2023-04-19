
import { fb, ig, tt } from "./Icons"
export default function List({ data, setEditModalData }) {

    if (null === data) {
        return (
            <h2>LOADING....</h2>
        )
    }

    const doEdit = client =>{
        setEditModalData(client)
    }


    return (
        <div className="card mt-4">
            <h5 className="card-header">List of Clients</h5>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    {
                        data.map(c => <li key={c.id} className="list-group-item">
                            <div className="client-line">
                                <div className="info">
                                    <div className="icon">
                                        {c.social === 'fb' ? fb : null}
                                        {c.social === 'ig' ? ig : null}
                                        {c.social === 'tt' ? tt : null}
                                    </div>
                                    <div className="name">{c.name}</div>
                                    <div className="age">{c.age}</div>
                                </div>
                                <div className="buttons">
                                    <button className="yellow small" onClick={_ => doEdit(c)}>edit</button>
                                    <button className="red small">delete</button>
                                </div>
                            </div>

                        </li>)
                    }
                </ul>
            </div>
        </div>

    )
}