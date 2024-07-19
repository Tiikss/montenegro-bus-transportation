import "../styles/navbar.css"
// import logo from "../images/buslogo2.png"

const Navbar = () => {
    return (
        <main>
            <div className="nav-content">
                {/* <img src={logo} alt="Logo"></img> */}
                <ul className="menu-bar">
                    <li>Početna</li>
                    <li>O nama</li>
                    <li>Red vožnje</li>
                    <li>Novosti</li>
                    <li>Lokalni prevoz</li>
                    <li>Međunarodni prevoz</li>
                    <li>Cjenovnik</li>
                </ul>
            </div>
        </main>
    )
}

export default Navbar