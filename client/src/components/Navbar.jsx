import { Link } from "react-router-dom";
import "../styles/navbar.css";
// import logo from "../images/buslogo2.png"

const Navbar = () => {
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
                    <Link to={"/cjenovnik"}>
                        <li>Cjenovnik</li>
                    </Link>
                    <Link to={"/login"}>
                        <li>Prijavi se</li>
                    </Link>
                </ul>
            </div>
        </main>
    );
};

export default Navbar;
