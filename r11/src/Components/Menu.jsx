import { useContext, useEffect, useState } from "react"
import { Store } from "../Store";
import { sortBooks } from "../actions";

export default function Menu() {

    const [sort, setSort] = useState('default');
    const { sorts, dispachBooks } = useContext(Store);

    const [search, setSearch] = useState('')

    useEffect(() => {
        dispachBooks(sortBooks(sort))
    },[sort, dispachBooks]);

    

    const sortChange = s => {
        setSort(s);
    }

    const searchChange = e => {
        setSearch(e.target.value);
    }

    const searchClear = _ => {
        setSearch('')
    }

    


    return (
        <div className="menu">
            <fieldset>
                <legend>sort</legend>
                <div className="labels">
                    {
                        sorts.map(s => 
                        <label
                            key={s[1]}
                            className={sort === s[1] ? 'active' : null}
                            onClick={_ => sortChange(s[1])}
                        >
                            {s[0]}
                        </label>)
                    }

                </div>
            </fieldset>
            <fieldset>
                <legend>Search book</legend>
                <input type="text" value={search} onChange={searchChange}></input>
                <span className="clear" onClick={searchClear}></span>
            </fieldset>
        </div>
    )
}