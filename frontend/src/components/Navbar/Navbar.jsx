import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext, useState } from "react";
// import logo from "../images/buslogo2.png"
import { AuthContext } from "../../contexts/AuthContext";

export const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

    const handleBurgerClick = () => {
        setOpenBurgerMenu(!openBurgerMenu);
    };

    return (
        <main>
            <div className="nav-content">
                {/* <img src={logo} alt="Logo"></img> */}
                <ul className="menu-bar">
                    <Link to={"/"}>
                        <li>Početna</li>
                    </Link>
                    <Link to={"/onama"}>
                        <li>O nama</li>
                    </Link>
                    <Link to={"/red-voznje"}>
                        <li>Red vožnje</li>
                    </Link>
                    <Link to={"/news"}>
                        <li>Novosti</li>
                    </Link>
                    {/* <Link to={"/cjenovnik"}>
                        <li>Cjenovnik</li>
                    </Link> */}
                    {user && user.role_type === "Admin" && (
                        <Link to={"/admin-panel"}>
                            <li>Admin panel</li>
                        </Link>
                    )}
                    {user && user.role_type === "Driver" && (
                        <Link to={"/prevoznik-panel"}>
                            <li>Prevoznik panel</li>
                        </Link>
                    )}
                    {!user && (
                        <Link to={"/login"}>
                            <li>Prijavi se</li>
                        </Link>
                    )}
                    {user && (
                        <Link to="/profil">
                            <li>{user.username}</li>
                        </Link>
                    )}
                </ul>
                <div className="menu-bar-responsive">
                    <h1>Autobuski prevoz Crne Gore</h1>

                    <input
                        id="burger"
                        type="checkbox"
                        checked={openBurgerMenu}
                        onChange={handleBurgerClick}
                    />

                    <label for="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <nav>
                        <ul>
                            <li>
                                <Link to={"/"} onClick={handleBurgerClick}>
                                    Početna
                                </Link>
                            </li>
                            <li>
                                <Link to={"/onama"} onClick={handleBurgerClick}>
                                    O nama
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/red-voznje"}
                                    onClick={handleBurgerClick}
                                >
                                    Red vožnje
                                </Link>
                            </li>
                            <li>
                                <Link to={"/news"} onClick={handleBurgerClick}>
                                    Novosti
                                </Link>
                            </li>
                            {user && user.role_type === "Admin" && (
                                <li>
                                    <Link
                                        to={"/admin-panel"}
                                        onClick={handleBurgerClick}
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
                                    >
                                        {user.username}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </main>
    );
};
