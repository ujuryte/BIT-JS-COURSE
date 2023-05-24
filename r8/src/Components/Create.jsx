import { useState } from "react"
import useFile from "../useFile";
import '../no.png';
import '../buttons.scss'

export default function Create() {

    const [title, setTitle] = useState('');
    const [file, readFile, removeFile] = useFile();




    return (
        <div className="box">
            <h2>Add New Image</h2>
            <div className="inputs">
                <div className="input">
                    <input type="text" placeholder="image text" value={title} onChange={e => setTitle(e.target.value)}></input>
                </div>
                <div className="input">
                    <input className="custom-file-input" type="file" onChange={readFile}></input>
                </div>
            </div>
            <div className="img">
                {
                    file ? <img src={file}></img> : <img src="../no.png"></img>
                }
                {
                    file ? <div className="remove" onClick={removeFile}></div> : null
                }
                
            </div>
            <button className="blue">add</button>
        </div>
    )
}