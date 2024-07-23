import React from "react";
import "../styles/prevoznik-panel.css";
import TabelaRedVoznje from "../components/TabelaRedVoznje";

const PrevoznikPanel = () => {
    return (
        <main className="prevoznik-body">
            <h1>Ime prevoznika</h1>
            <h2>Aktivne linije</h2>
            <TabelaRedVoznje isEdit={true} />

            <h2>Linije na cekanju</h2>
            <TabelaRedVoznje isEdit={true} />
        </main>
    );
};

export default PrevoznikPanel;
