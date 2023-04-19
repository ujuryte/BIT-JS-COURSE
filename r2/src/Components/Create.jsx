import { useState } from "react"
import { fb, ig, tt } from "./Icons"
export default function Create({setCreateData}) {

    const [name, setName] = useState('');
    const [age, setAge] = useState(14);
    const [social, setSocial] = useState('');

    const doName = e => {
        setName(e.target.value);
    }

    const doAge = e => {
        const ageNow = parseInt(e.target.value);
        setAge(ageNow);
        if(ageNow < 30){
            setSocial('tt')
        } else if(ageNow < 60) {
            setSocial('ig')
        } else {
            setSocial('fb')
        }
    }

    const doSocial = s => {
        setSocial(s)
    }

    const create = _ => {
        setCreateData({
            name,
            age,
            social
        })
        setName('');
        setAge(14);
        setSocial('');
    }


    return (
        <div className="card mt-4">
            <h5 className="card-header">Add New Client</h5>
            <div className="card-body">
                <div className="mb-4">
                    <label className="form-label">Client Name</label>
                    <input type="text" className="form-control" value={name} onChange={doName}/>
                    <div className="form-text">Enter client name.</div>
                </div>

                <div className="mb-4">
                    <label className="form-label"><span>Client Age</span> <span><h3>{age}</h3></span></label>
                    <input type="range" className="form-range" min='14' max='99' value={age} onChange={doAge}></input>
                    <div className="form-text">Enter client age.</div>
                </div>

                <div className="mb-4">
                    <label className="form-label">Client Social Network</label>
                    <div className="icons-bin">
                        <div className={social === 'fb' ? 'icon checked' : 'icon'} onClick={_ => doSocial('fb')}>{fb}</div>
                        <div className={social === 'ig' ? 'icon checked' : 'icon'} onClick={_ => doSocial('ig')}>{ig}</div>
                        <div className={social === 'tt' ? 'icon checked' : 'icon'} onClick={_ => doSocial('tt')}>{tt}</div>
                    </div>
                    <div className="form-text">Check client social network.</div>
                </div>
                <button type="button" className="blue small" onClick={create}>CREATE</button>
            </div>
        </div>

    )
}