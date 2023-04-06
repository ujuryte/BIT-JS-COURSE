export default function Zoo({col}) {
    const backgroundColor = col === "1" ? "blue" : col === "2" ? "red" : "transparent";
    return <h1 style={{backgroundColor}}>Zebrai ir bebrai</h1>
}