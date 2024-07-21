import React from "react";
import "../styles/prevoznik-panel.css";
import TabelaRedVoznje from "../components/TabelaRedVoznje";

const PrevoznikPanel = () => {
    return (
        <main className="prevoznik-body">
            <h1>Ime prevoznika</h1>
            <TabelaRedVoznje />
        </main>
    );
};

export default PrevoznikPanel;
