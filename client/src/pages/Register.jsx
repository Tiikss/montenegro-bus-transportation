import React from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <main id="register-body">
            <div className="register-container">
                <div id="loginttl">
                    <h1 id="login-h1">Registruj se</h1>
                    <p>
                        Imaš nalog? <Link to={"/login"}>Prijavi se sada!</Link>
                    </p>
                </div>
                <form className="register-form">
                    <label htmlFor="username">Korisničko ime:</label>
                    <input type="text" id="username" name="username" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="password">Lozinka:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                    <label htmlFor="confirm-password">Potvrda lozinke:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirmPassword"
                        required
                    />
                    <button type="submit">Registruj se</button>
                </form>
            </div>
        </main>
    );
};
