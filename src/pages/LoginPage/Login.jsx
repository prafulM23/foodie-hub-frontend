import { useState } from "react"
import "./Login.css"
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState({
        input: "",
        email: "",
        password: ""
    })


    //Login operation
    const handleLogin = () => {
        if (!email && !password) {
            return setError({ input: "All field is Require" })
        }
        if (!email) {
            return setError({ email: "Email is Require" })
        }
        if (!password) {
            return setError({ password: "password is Require" })
        }

        setEmail("")
        setPassword("")
    }

    return (
        <>
            <section className="login-container">
                <div className="login-modal-box">
                    <h1>Welcome Back!</h1>
                    {error ? <p className="login-error">{error.input}</p> : ""}
                    <div className="login-field-box">
                        <label>
                            Email : <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value); setError({ email: "" }) }} placeholder="Enter Your Email" />
                            {error ? <p className="login-error">{error.email}</p> : ""}
                        </label>
                        <label>
                            Password : <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value); setError({ password: "" }) }} placeholder="Enter Your Password" />
                            {error ? <p className="login-error">{error.password}</p> : ""}

                        </label>
                        <div className="login-forget-sign-box">
                            <p>Forget Password</p> ,
                            <p onClick={() => navigate("/signin")}>Sign Up</p>
                        </div>
                        <button className="login-btn" onClick={handleLogin}>Login !</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login