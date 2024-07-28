import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <main id="login-body">
            <div className="login-container">
                <div id="loginttl">
                    <h1 id="login-h1">Prijavi se</h1>
                    <p>
                        Nemaš nalog?{" "}
                        <Link to={"/register"}>Registruj se sada!</Link>
                    </p>
                </div>
                <form className="login-form">
                    <label htmlFor="username">Korisničko ime:</label>
                    <input type="text" id="username" name="username" required />
                    <label htmlFor="password">Lozinka:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                    <button type="submit">Prijavi se</button>
                </form>
            </div>
        </main>
    );
};
