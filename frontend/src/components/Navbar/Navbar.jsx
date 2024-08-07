import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
// import logo from "../images/buslogo2.png"
import { AuthContext } from "../../contexts/AuthContext";

export const Navbar = () => {
    const { user } = useContext(AuthContext);

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
            </div>
        </main>
    );
};
