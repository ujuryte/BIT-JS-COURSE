import { createContext, useState } from "react";
import C from "./C";

export const BContext = createContext();

export default function B() {

    const [countB, setCountB] = useState(777);



    return (
        <div className="nice-border">
            <div className="name">B</div>

            <BContext.Provider value={{
                countB
            }}>
                <C />
            </BContext.Provider>

            <button className="blue" onClick={_ => setCountB(c => c * 7)}>* 7</button>
        </div>
    )
}