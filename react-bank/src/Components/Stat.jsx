export default function Stat({data}) {

    if (null === data) {
        return (
            <h2>LOADING....</h2>
        )
    }

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
                        <td>{data.length ? data.length : null}</td>
                        <td></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}