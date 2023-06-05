import { useContext, useEffect, useRef, useState } from "react"
import { Store } from "../Store";
import { filterPrice, filterTypes, searchBook, sortBooks } from "../actions";

export default function Menu() {

    const [sort, setSort] = useState('default');
    const [search, setSearch] = useState('');
    const [priceRange, setPriceRange] = useState([0, 0]);
    const [typesSelect, setTypesSelect] = useState(new Set());

    const { sorts, dispachBooks, books, types } = useContext(Store);

    const minMax = useRef([]);

    useEffect(_ => {
        if(null === books) {
            return;
        }
        if (minMax.current.length) {
            return;
        }
        minMax.current[0] = Math.floor(Math.min(...books.map(b => b.price)));
        minMax.current[1] = Math.ceil(Math.max(...books.map(b => b.price)));

        setPriceRange([...minMax.current])

    }, [books])


    useEffect(_ => {
        
        dispachBooks(sortBooks(sort))
    },[sort, dispachBooks]);

    useEffect(_ => {
        dispachBooks(searchBook(search))
    }, [search, dispachBooks])

    useEffect(_ => {
        dispachBooks(filterPrice(priceRange))
    }, [priceRange, dispachBooks])

    useEffect(_ => {
        dispachBooks(filterTypes(typesSelect))
    }, [typesSelect, dispachBooks])

    const changeRange = (e, r) => {
        const price = parseInt(e.target.value);
        if (r === 'min') {
            setPriceRange(p => [price, Math.max(p[1], price)])
        } else{
            setPriceRange(p => [Math.min(p[0], price), price])
        }
    }

    const sortChange = s => {
        setSort(s);
    }

    const searchChange = e => {
        setSearch(e.target.value);
    }

    const searchClear = _ => {
        setSearch('')
    }

    const typesChange = id => {
        setTypesSelect(t => {
            const c = new Set(t);
            if (c.has(id)) {
                c.delete(id)
            } else {
                c.add(id)
            }
            return c;
        })
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
            <fieldset>
                <legend>Price range</legend>
                <label>min price {priceRange[0]} eur</label>
                <input type="range" onChange={e => changeRange(e, 'min')} value={priceRange[0]} min={minMax.current.length ? minMax.current[0] : 0} max={minMax.current.length ? minMax.current[1] : 0} step={1}></input>
                <label>max price {priceRange[1]} eur</label>
                <input type="range" onChange={e => changeRange(e, 'max')} value={priceRange[1]} min={minMax.current.length ? minMax.current[0] : 0} max={minMax.current.length ? minMax.current[1] : 0} step={1}></input>
            </fieldset>
            <fieldset>
                <legend>Types</legend>
                <div className="labels">
                    {
                        types?.map(t => 
                        <label
                            key={t.id}
                            className={typesSelect.has(t.id) ? 'active' : null}
                            onClick={_ => typesChange(t.id)}
                        >
                            {t.title}
                        </label>)
                    }

                </div>
            </fieldset>
        </div>
    )
}