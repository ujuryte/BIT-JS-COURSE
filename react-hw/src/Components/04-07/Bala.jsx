export default function Bala({props}){
    const { id, type, name, color } = props;
  return (
    <div className="array">
      <p>ID: {id}</p>
      <p>Type: {type}</p>
      <p>Name: {name}</p>
      <p>Color: {color}</p>
    </div>
)}