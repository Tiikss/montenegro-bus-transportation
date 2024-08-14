import React, { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { register } from "../../services/auth";

export const Register = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({});
    const [error, setError] = useState({ title: "", message: "" });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const value = localStorage.getItem('theme');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleRegisterClick = async (e) => {
        e.preventDefault();

        if (
            userData.full_name === "" ||
            userData.username === "" ||
            userData.email === "" ||
            userData.password === "" ||
            userData.confirmPassword === ""
        ) {
            setError({
                title: "Greška",
                message: "Morate popuniti sva polja!",
            });
            return;
        }

        try {
            if (userData.password !== userData.confirmPassword) {
                setError({
                    title: "Greška",
                    message: "Lozinke se ne poklapaju!",
                });
                return;
            }
            if (userData.password.length < 8) {
                setError({
                    title: "Greška",
                    message: "Lozinka mora imati najmanje 8 karaktera!",
                });
                return;
            }
            const user = {
                username: userData.username,
                full_name: userData.full_name,
                phone_number: "000000000",
                email: userData.email,
                password: userData.password,
            };
            const response = await register(user);
            navigate("/login");
        } catch (error) {
            if (error === 400) {
                setError({
                    title: "Greška",
                    message: "Korisnički email već postoje!",
                });
            }
            else if (error === 409) {
                setError({
                    title: "Greška",
                    message: "Korisnik sa ovim korisničkim imenom već postoji!",
                });
            }
        }
    };

    const boxShadow = value === 'light' ? '0px 4px 6px #00000033' : '0px 4px 6px #9e9e9e33';
    const bckColor = value === 'light' ? '#f9f9f9' : '#121212';
    const txtColor = value === 'light' ? 'black' : 'white';

    return (
        <main id="register-body">
            <div className="register-container" style={{boxShadow: `${boxShadow}`, backgroundColor: `${bckColor}`}}>
                <div id="loginttl">
                    <h1 id="login-h1">Registruj se</h1>
                    {value==='light' ? <p style={{color: 'black'}}>
                        Imaš nalog? <Link to={"/login"}>Prijavi se sada!</Link>
                    </p> :
                    <p style={{color: 'white'}}>
                        Imaš nalog? <Link to={"/login"}>Prijavi se sada!</Link>
                    </p>}
                </div>
                <form className="register-form">
                    <label htmlFor="full_name" style={{color: `${txtColor}`}}>Ime i prezime:</label>
                    <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="username" style={{color: `${txtColor}`}}>Korisničko ime:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="email" style={{color: `${txtColor}`}}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="password" style={{color: `${txtColor}`}}>Lozinka:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        onChange={handleChange}
                    />
                    <label htmlFor="confirm-password" style={{color: `${txtColor}`}}>Potvrda lozinke:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirmPassword"
                        required
                        onChange={handleChange}
                    />
                    {error.message!=="" && <p style={{color: "#ba0c0e"}}>{error.message}</p>}
                    <button type="submit" onClick={handleRegisterClick}>
                        Registruj se
                    </button>
                </form>
            </div>
            <ModalWindow
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                title={error.title}
                message={error.message}
            />
        </main>
    );
};
