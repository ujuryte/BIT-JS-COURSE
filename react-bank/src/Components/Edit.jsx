import { useState } from "react";
export default function Edit({ c, setEditData, setDeleteData }) {
 
  const [diffBalance, setDiffBalance] = useState(0);

  
  const onBalanceInputChange = (e) => {
    setDiffBalance(Number(e.target.value));
  };
  
  const addToBalance = () => {
    if (diffBalance > 0) {
      setEditData({ ...c, balance: c.balance + diffBalance });
     
    }
  };

  const deductBalance = () => {
    if (diffBalance < c.balance) {
        setEditData({ ...c, balance: c.balance - diffBalance });
    } else {
        return
    }
  }

  const destroy = _ => {
    if(c.balance > 0){
        return
    }
    setDeleteData(c.id)
  }

  return (
    <>
      <td>
        <div className="input-group">
          <span className="input-group-text">$</span>
          
          <input type="number" value={diffBalance} onChange={onBalanceInputChange} required min={0} className="form-control arrows" />
        </div>
      </td>
      <td>
        <button onClick={addToBalance} className="btn btn-success">
          Pridėti lėšas
        </button>
      </td>
      <td>
        <button className="btn btn-warning" onClick={deductBalance}>Nuskaičiuoti lėšas</button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={destroy}>Ištrinti sąskaitą</button>
      </td>
    </>
  );
}