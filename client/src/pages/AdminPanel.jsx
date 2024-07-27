import React, { useState } from "react";
import "../styles/admin-panel.css";
import TabelaKorisnici from "../components/TabelaKorisnici";

const AdminPanel = () => {
    const [selectedTab, setSelectedTab] = useState("korisnici");

    const handleTabClick = (e) => {
        e.preventDefault();
        setSelectedTab(e.target.textContent.toLowerCase());
    };

    return (
        <main className="adminpanel-body">
            <h1>Admin Panel</h1>
            <div className="adminpanel-buttons">
                <button className="adminpanel-button" onClick={handleTabClick}>
                    Korisnici
                </button>
                <button className="adminpanel-button" onClick={handleTabClick}>
                    Linije
                </button>
                <button className="adminpanel-button" onClick={handleTabClick}>
                    Stanice
                </button>
                <button className="adminpanel-button" onClick={handleTabClick}>
                    Obavjestenja
                </button>
            </div>
            <div className="adminpanel-content">
                <h2>Korisnici</h2>
                <TabelaKorisnici isDriver={false} isEdit={true} />
                <h2>Prevoznici</h2>
                <TabelaKorisnici isDriver={true} isEdit={true} />
            </div>
        </main>
    );
};

export default AdminPanel;
