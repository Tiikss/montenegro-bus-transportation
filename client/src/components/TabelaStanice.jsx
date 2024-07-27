import React, { useState } from "react";
import "../styles/tabela-stanice.css";
import MapWrapper from "./MapWrapper";

const TabelaStanice = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddNewStation = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    return (
        <>
            <button className="adminpanel-button" onClick={handleAddNewStation}>
                Dodaj stanicu
            </button>

            <table className="tabela-stanice">
                <tr>
                    <th>ID</th>
                    <th>Ime</th>
                    <th>Drzava</th>
                    <th>Grad</th>
                    <th>Geografska sirina</th>
                    <th>Geografska duzina</th>
                    <th>Izbrisi</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Stanica 1</td>
                    <td>Crna Gora</td>
                    <td>Podgorica</td>
                    <td>43.8563</td>
                    <td>18.4131</td>
                    <td>
                        <button className="adminpanel-button">Izbrisi</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Stanica 2</td>
                    <td>Crna Gora</td>
                    <td>Bar</td>
                    <td>43.5563</td>
                    <td>18.4131</td>
                    <td>
                        <button className="adminpanel-button">Izbrisi</button>
                    </td>
                </tr>
            </table>
            <form
                className={"new-station-modal" + (isModalOpen ? "" : " hidden")}
            >
                <h2>Dodaj novu stanicu</h2>
                <label htmlFor="station-name">Ime:</label>
                <input type="text" id="station-name" />
                <label htmlFor="station-country">Drzava:</label>
                <input type="text" id="station-country" />
                <label htmlFor="station-city">Grad:</label>
                <input type="text" id="station-city" />
                <MapWrapper stations={[]} />
                {/* Odje treba opcija da se sa mape bira lokacija i da se stavi */}
                <button className="adminpanel-button">Dodaj stanicu</button>
            </form>
            <div
                className={
                    "overlay-new-station" + (isModalOpen ? "" : " hidden")
                }
                onClick={() => setIsModalOpen(false)}
            ></div>
        </>
    );
};

export default TabelaStanice;
