
import { fb, ig, tt } from "./Icons"
export default function List({ stat, socialFilter, filterSocialValue, data, setEditModalData, setDeleteModalData, ageSort, sortAgeDir }) {

    const doEdit = client => {
        setEditModalData(client)
    }

    const doDelete = client => {
        setDeleteModalData(client)
    }

    if (null === data) {
        return (
            <h2>LOADING....</h2>
        )
    }


    return (
        <div className="card mt-4">
            <div className="card-header">
                <h5>List of Clients</h5>
                <div className="sf-box">
                    <div className={'sort ' + sortAgeDir} onClick={ageSort}>Age sort</div>
                    <div className="social-filter" onClick={socialFilter}>
                        {
                            filterSocialValue === 'fb' ? <div>{fb}</div> : null
                        }
                        {
                            filterSocialValue === 'ig' ? <div>{ig}</div> : null
                        }
                        {
                            filterSocialValue === 'tt' ? <div>{tt}</div> : null
                        }
                        {
                            filterSocialValue === '' ? <div><h2>F</h2></div> : null
                        }

                    </div>
                    {stat ?
                        <div className="stats">
                        <span>Age average: {(stat.age / (stat.count ? stat.count : 1)).toFixed(2)} </span>
                        <span>Facebook: {stat.fb}</span>
                        <span>Instagram: {stat.ig}</span>
                        <span>TikTok: {stat.tt}</span>
                    </div> : null
                    }
                    
                </div>
            </div>

            <div className="card-body">
                <ul className="list-group list-group-flush">
                    {
                        data.map(c => c.show ? <li key={c.id} className="list-group-item">
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
                                    <button className="yellow small" onClick={_ => doEdit(c)} disabled={!!c.pid}>edit</button>
                                    <button className="red small" onClick={_ => doDelete(c)} disabled={!!c.pid}>delete</button>
                                </div>
                            </div>

                        </li> : null)
                    }
                </ul>
            </div>
        </div>

    )
}