import { useState } from "react"
import Confetti from "react-confetti";
import "./SignIn.css"
const Signin = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [isLoggedin, setIsLoggedIn] = useState(false)
    const [error, setError] = useState({
        input: "",
        email: "",
        password: "",
        name: ""
    })


    //sign operation
    const handleSign = () => {
        if (!name && !email && !password) {
            return setError({ input: "All field is Require" })
        }
        if (!name && !email) {
            return setError({ name: "Name is Require", email: "Email is Require" })
        }
        if (!name && !password) {
            return setError({ name: "Name is Require", password: "Password is Require" })
        }
        if (!email && !password) {
            return setError({ email: "Email is Require", password: "Password is Require" })
        }
        if (!name) {
            return setError({ name: "Name is Require" })
        }
        if (!email) {
            return setError({ email: "Email is Require" })
        }
        if (!password) {
            return setError({ password: "Password is Require" })
        }

        setIsLoggedIn(true)
        setName("")
        setEmail("")
        setPassword("")
    }

    return (
        <>
            <section className="sign-container">
                <div className="sign-modal-box">
                    <h1> {isLoggedin ? "WelCome User" : "Hey,Foodie"}</h1>

                    {/* For Celebreting After sign In */}
                    {
                        isLoggedin ? <Confetti style={{ width: "80%", margin: "20px auto" }}
                            numberOfPieces={200}
                            recycle={false}
                            gravity={0.8} /> : ""
                    }

                    {error ? <p className="sign-error">{error.input}</p> : ""}
                    <div className="sign-field-box">
                        <label>
                            Name : <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value); setError({ name: "" }) }} placeholder="Enter Your Name" />
                            {error ? <p className="sign-error">{error.name}</p> : ""}
                        </label>
                        <label>
                            Email : <input type="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value); setError({ email: "" }) }} placeholder="Enter Your Email" />
                            {error ? <p className="sign-error">{error.email}</p> : ""}
                        </label>
                        <label>
                            Password : <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value); setError({ password: "" }) }} placeholder="Enter Your Password" />
                            {error ? <p className="sign-error">{error.password}</p> : ""}

                        </label>

                        <button className="sign-btn" onClick={handleSign}>Sign-In !</button>
                    </div>
                </div>
            </section>
        </>
    )
}




export default Signin