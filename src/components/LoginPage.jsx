import React from "react";
import "./LoginPage.css"


function LoginPage() {
    return (
        <div className="container">
            <div className="login">
            <h1>LOGIN</h1>
            </div>
            <form className="input">
                <div className="email">
                    <p>E-mail :</p>
                    <input type="email" placeholder="Enter E-Mail" />
                </div>
                <div className="password">
                    <p>Password :</p>
                    <input type="password" placeholder="Enter Password" />
                </div>
                <div className="button">
                <button>Login</button>
                </div>
            </form>

        </div>
    )


}
export default LoginPage