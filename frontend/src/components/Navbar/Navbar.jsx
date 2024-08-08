import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../../contexts/AuthContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle"; 

export const Navbar = ({ theme, toggleTheme }) => {
    const { user } = useContext(AuthContext);
    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

    const handleBurgerClick = () => {
        setOpenBurgerMenu(!openBurgerMenu);
    };

    return (
        <nav className="navbar">
            <div className="nav-content">
                <ul className="menu-bar">
                    <Link to={"/"}><li>Početna</li></Link>
                    <Link to={"/onama"}><li>O nama</li></Link>
                    <Link to={"/red-voznje"}><li>Red vožnje</li></Link>
                    <Link to={"/news"}><li>Novosti</li></Link>
                    {user && user.role_type === "Admin" && (
                        <Link to={"/admin-panel"}><li>Admin panel</li></Link>
                    )}
                    {user && user.role_type === "Driver" && (
                        <Link to={"/prevoznik-panel"}><li>Prevoznik panel</li></Link>
                    )}
                    {!user && (
                        <Link to={"/login"}><li>Prijavi se</li></Link>
                    )}
                    {user && (
                        <Link to="/profil"><li>{user.username}</li></Link>
                    )}
                    <li className="tgthbtn">
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </li>
                </ul>
            </div>
        </nav>
    );
};
