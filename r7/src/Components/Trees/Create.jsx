import { useContext, useState } from "react"
import { Data } from "../../Data"

export default function Create() {

    const { types, setCreateTrees } = useContext(Data);

    const [input, setInput] = useState({
        title: '',
        height: '',
        type: 0
    });

    const changeInput = (e, prop) => {
        let value = e.target.value;
        if(prop === 'height'){
            value = value.replace(/[^\d\.]\]/g, '');
        }

        setInput(i => ({...i, [prop]: value}));
    } 

    const create = _ => {
        setCreateTrees({
            title: input.title,
            height: parseFloat(input.height),
            type: parseInt(input.type)
        });
        setInput({
            title: '',
            height: '',
            type: 0
        });
    }


    return (
        <div className="card m-3">
            <h2 className="card-header color-yellow">Plant new tree</h2>
            <div className="card-body">
                <h5 className="card-title color-gray">Save the planet. Plant trees!</h5>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label">Tree Title</label>
                                <input type="text" className="form-control" value={input.title} onChange={e => changeInput(e, 'title')} />
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="mb-3">
                                <label className="form-label">Tree Height</label>
                                <input type="text" className="form-control" value={input.height} onChange={e => changeInput(e, 'height')} />
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="mb-3">
                                <label className="form-label">Tree Type</label>
                                <select className="form-select" value={input.type}  onChange={e => changeInput(e, 'type')}>
                                    <option key={0} value={0}>Select type</option>
                                    {
                                        types?.map(t => <option key={t.id} value={t.id}>{t.title}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="button" className="green" onClick={create}>plant!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}