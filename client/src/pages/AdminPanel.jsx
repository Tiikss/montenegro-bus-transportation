import React from "react";
import "../styles/admin-panel.css";

const AdminPanel = () => {
    return (
        <main className="adminpanel-body">
            <h1>Admin Panel</h1>
            <div className="adminpanel-buttons">
                <button className="adminpanel-button">Korisnici</button>
                <button className="adminpanel-button">Linije</button>
                <button className="adminpanel-button">Stanice</button>
                <button className="adminpanel-button">Obavjestenja</button>
            </div>
        </main>
    );
};

export default AdminPanel;
