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
    const value = localStorage.getItem('theme');

    const handleLoginClick = async (e) => {
        e.preventDefault();

        if (userData.username === "" || userData.password === "") {
            setError("Morate unijeti korisničko ime i lozinku!");
        }

        try {
            await login(userData);
            navigate("/");
        } catch (error) {
            console.log(error);
            if (error === 404) {
                setError("Korisnik ne postoji!");
            } else if (error === 401) {
                setError("Korisničko ime ili lozinka nisu ispravni!");
            }
        }
    };

    const boxShadow = value === 'light' ? '0px 4px 6px #00000033' : '0px 4px 6px #9e9e9e33';
    const bckColor = value === 'light' ? '#f9f9f9' : '#121212';

    return (
        <main id="login-body">
            <div className="login-container" style={{boxShadow: `${boxShadow}`, backgroundColor: `${bckColor}`}}>
                <div id="loginttl">
                    <h1 id="login-h1">Prijavi se</h1>
                    {value==='light' ? <p style={{color: 'black'}}>
                        Nemaš nalog?{" "}
                        <Link to={"/register"}>Registruj se sada!</Link>
                    </p> :
                    <p style={{color: 'white'}}>
                        Nemaš nalog?{" "}
                        <Link to={"/register"}>Registruj se sada!</Link>
                    </p>}
                </div>
                <form className="login-form">
                    {value==='light' ? <label htmlFor="username" style={{color: 'black'}}>Korisničko ime ili email:</label> : <label htmlFor="username" style={{color: 'white'}}>Korisničko ime ili email:</label>}
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        onChange={handleChange}
                    />
                    {value==='light' ? <label htmlFor="password" style={{color: 'black'}}>Lozinka:</label> : <label htmlFor="password" style={{color: 'white'}}>Lozinka:</label>}
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        onChange={handleChange}
                    />
                    {error && (
                        <p className="err" style={{ color: "#ba0c0e" }}>
                            {error}
                            <br />
                            {error.includes("lozinka") && (
                                <Link to="/promjena-lozinke">
                                    Zaboravili ste lozinku?
                                </Link>
                            )}
                        </p>
                    )}
                    <button
                        className="btnsty"
                        type="submit"
                        onClick={handleLoginClick}
                    >
                        Prijavi se
                    </button>
                </form>
            </div>
        </main>
    );
};
