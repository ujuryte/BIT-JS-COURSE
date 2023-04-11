export default function Stat({cl}) {
    return (
        <div className=" mt-5">
            <h2>Statistika</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Klientu skaicius:</th>
                        <th>Bendra suma:</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>{cl.length}</td>
                        <td></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}