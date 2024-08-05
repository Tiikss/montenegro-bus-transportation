import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [userData, setUserData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleLoginClick = async (e) => {
        e.preventDefault();

        if (userData.username === "" || userData.password === ""){
            setError("Morate unijeti korisničko ime i lozinku!");
        }

        try {
            await login(userData);
            // navigate("/");
        } catch (error) {
            console.log(error);
            if (error === 404){
                setError("Korisnik ne postoji!");
            }
            else if (error === 401){
                setError("Korisničko ime ili lozinka nisu ispravni!");
            }
        }
    };

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
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Lozinka:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        onChange={handleChange}
                    />
                    {error && <p className="err" style={{color: "#ba0c0e"}}>{error}</p>}
                    <button className="btnsty" type="submit" onClick={handleLoginClick}>
                        Prijavi se
                    </button>
                </form>
            </div>
        </main>
    );
};
