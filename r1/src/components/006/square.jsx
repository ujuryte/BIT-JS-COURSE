import ZanaBazar from "./ZanaBazar";

export default function Square({niceColor, letter}) {
    return (
        <div className="square" style={{
            backgroundColor: niceColor + '70',
            borderColor: niceColor
        }}>
            {
                letter > 30 ? letter : <ZanaBazar letter={letter} />
            }
            
        </div>
    )
}