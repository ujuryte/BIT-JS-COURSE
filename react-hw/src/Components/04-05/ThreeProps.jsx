export default function ThreeProps({tekstas, darTeksto, spalva}) {
    return <div>
        <h1 style={{backgroundColor: spalva}}>{tekstas}</h1>
        <h2 style={{backgroundColor: spalva}}>{darTeksto}</h2>
    </div>
}