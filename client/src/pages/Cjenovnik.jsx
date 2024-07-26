import React, { useEffect, useState } from "react";
import "../styles/cjenovnik.css";
import DropDownCard from "../components/DropdownCard";

const Cjenovnik = () => {
    const [stations, setStations] = useState([
        "Podgorica",
        "Niksic",
        "Bar",
        "Budva",
        "Kotor",
    ]);
    const [currStation, setCurrStation] = useState("");

    const handleChangeStation = (e) => {
        setCurrStation(e.target.value);
    };

    const handleSetStation = (e) => {
        setCurrStation(e.target.childNodes[0].innerHTML);
        setStations([]);
    };

    useEffect(() => {
        const filteredStations = stations.filter((station) =>
            station.toLowerCase().includes(currStation.toLowerCase())
        );
        setStations(filteredStations);
        if (currStation === "") {
            setStations(["Podgorica", "Niksic", "Bar", "Budva", "Kotor"]);
        }
    }, [currStation]);

    return (
        <main id="cjenovnik-body">
            <h1>Cjenovnik autobusnih stanica Crne Gore</h1>

            <div id="search-container">
                <input
                    type="text"
                    placeholder="Pretraži stanice"
                    id="search-prices"
                    value={currStation}
                    onChange={handleChangeStation}
                    style={
                        currStation === "" || stations.length === 0
                            ? { borderRadius: "10px" }
                            : { borderRadius: "10px 10px 0 0" }
                    }
                />
            </div>

            <div className="stations-dropdown-container">
                {currStation !== "" &&
                    stations.map((station) => (
                        <DropDownCard
                            item={station}
                            key={station}
                            onClick={handleSetStation}
                        />
                    ))}
            </div>

            <div id="table-container">
                <table id="cjenovnik-table">
                    <thead>
                        <tr>
                            <th>Polazna stanica</th>
                            <th>Dolazna stanica</th>
                            <th>Cijena</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Podgorica</td>
                            <td>Bar</td>
                            <td>5.00€</td>
                        </tr>
                        <tr>
                            <td>Podgorica</td>
                            <td>Herceg Novi</td>
                            <td>12.00€</td>
                        </tr>
                        <tr>
                            <td>Podgorica</td>
                            <td>Budva</td>
                            <td>7.00€</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Cjenovnik;
