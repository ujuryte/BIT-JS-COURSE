export default function Dogs5({numbers}) {
    if(numbers > 6){
        return <div style={{backgroundColor:'green'}}>{numbers}</div>
    } else {
        return <div style={{backgroundColor:'red'}}>{numbers}</div>
    }
}