import { useContext, useState } from "react"
import { Store } from "../Store";

export default function Login() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const { setLoginRequest } = useContext(Store);

    const doLogin = _ => {
        setLoginRequest({
            action: "login",
            email,
            pass
        });

        setEmail('');
        setPass('');

    }

    return (



        <div className="container">
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-9">
                    <div className="card">
                        <h5 className="card-header">App Login</h5>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                                <div className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" value={pass} onChange={e => setPass(e.target.value)} />
                            </div>
                            <button type="button" className="btn btn-primary" onClick={doLogin}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}