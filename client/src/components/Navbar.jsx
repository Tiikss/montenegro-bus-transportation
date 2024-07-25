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
                    <li>O nama</li>
                    <Link to={"/red-voznje"}>
                        <li>Red vožnje</li>
                    </Link>
                    <Link to={"/news"}>
                        <li>Novosti</li>
                    </Link>
                    <li>Lokalni prevoz</li>
                    <li>Međunarodni prevoz</li>
                    <li>Cjenovnik</li>
                </ul>
            </div>
        </main>
    );
};

export default Navbar;
