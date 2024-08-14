import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AuthContext } from "../../contexts/AuthContext";
import ThemeToggle from "../ThemeToggle/ThemeToggle"; 

export const Navbar = ({ theme, toggleTheme }) => {
    const { user } = useContext(AuthContext);
    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);
    const value = localStorage.getItem('theme');

    const handleBurgerClick = () => {
        setOpenBurgerMenu(!openBurgerMenu);
    };

    const bckColor = value === 'light' ? '#f9f9f9' : '#121212';
    const txtColor = value === 'light' ? 'black' : 'white';

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
                    <li className="tgthbtn" onClick={toggleTheme}>
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </li>
                </ul>
                <div className="menu-bar-responsive">
                    <h1>Autobuski prevoz Crne Gore</h1>

                    <input
                        id="burger"
                        type="checkbox"
                        checked={openBurgerMenu}
                        onChange={handleBurgerClick}
                    />

                    <label htmlFor="burger">
                        <span style={{backgroundColor: `${txtColor}`}}></span>
                        <span style={{backgroundColor: `${txtColor}`}}></span>
                        <span style={{backgroundColor: `${txtColor}`}}></span>
                    </label>

                    <nav style={{backgroundColor: `${bckColor}`} }>
                        <ul>
                            <li>
                                <Link to={"/"} onClick={handleBurgerClick} style={{color: `${txtColor}`}}>
                                    Početna
                                </Link>
                            </li>
                            <li>
                                <Link to={"/onama"} onClick={handleBurgerClick} style={{color: `${txtColor}`}}>
                                    O nama
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/red-voznje"}
                                    onClick={handleBurgerClick}
                                    style={{color: `${txtColor}`}}
                                >
                                    Red vožnje
                                </Link>
                            </li>
                            <li>
                                <Link to={"/news"} onClick={handleBurgerClick} style={{color: `${txtColor}`}}>
                                    Novosti
                                </Link>
                            </li>
                            {user && user.role_type === "Admin" && (
                                <li>
                                    <Link
                                        to={"/admin-panel"}
                                        onClick={handleBurgerClick}
                                        style={{color: `${txtColor}`}}
                                    >
                                        Admin panel
                                    </Link>
                                </li>
                            )}
                            {user && user.role_type === "Driver" && (
                                <li>
                                    <Link
                                        to={"/prevoznik-panel"}
                                        onClick={handleBurgerClick}
                                        style={{color: `${txtColor}`}}
                                    >
                                        Prevoznik panel
                                    </Link>
                                </li>
                            )}
                            {!user && (
                                <li>
                                    <Link
                                        to={"/login"}
                                        onClick={handleBurgerClick}
                                        style={{color: `${txtColor}`}}
                                    >
                                        Prijavi se
                                    </Link>
                                </li>
                            )}
                            {user && (
                                <li>
                                    <Link
                                        to={"/profil"}
                                        onClick={handleBurgerClick}
                                        style={{color: `${txtColor}`}}
                                    >
                                        {user.username}
                                    </Link>
                                </li>
                            )}
                            <li className="tgthbtn" onClick={toggleTheme}>
                                <ThemeToggle theme={theme} toggleTheme={toggleTheme} hamburger={true}/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </nav>
    );
};
