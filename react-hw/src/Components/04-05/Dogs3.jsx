export default function Dogs3({god, index}) {
    
        if(index % 2 === 0 ? god : null){
            return <div className="square">{god}</div>
        } else {
            return <div className="circle">{god}</div>
        }
    
}