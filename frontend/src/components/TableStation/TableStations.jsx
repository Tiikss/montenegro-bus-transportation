import React, { useState, useEffect } from "react";
import "./table-stations.css";
import { MapWrapper } from "../MapWrapper/MapWrapper";
import { DropDownCard } from "../DropdownCard/DropdownCard";

export const TableStations = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [allCities, setAllCities] = useState([
        "Podgorica",
        "Niksic",
        "Bar",
        "Budva",
        "Kotor",
    ]);
    const [allCountries, setAllCountries] = useState([
        "Crna Gora",
        "Srbija",
        "Hrvatska",
        "Bosna i Hercegovina",
        "Slovenija",
    ]);
    const [inputs, setInputs] = useState({
        city: "",
        country: "",
    });

    const handleAddNewStation = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSetSearch = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.parentElement.parentElement.childNodes[0].id]:
                e.target.innerText,
        }));
        if (e.target.parentElement.parentElement.childNodes[0].id === "city") {
            setAllCities([]);
        } else {
            setAllCountries([]);
        }
    };

    useEffect(() => {
        const filteredCities = allCities.filter((item) =>
            item.toLowerCase().includes(inputs.city.toLowerCase())
        );
        setAllCities(filteredCities);
        if (inputs.city === "") {
            setAllCities(["Podgorica", "Niksic", "Bar", "Budva", "Kotor"]);
        }
    }, [inputs.city]);

    useEffect(() => {
        const filteredCountries = allCountries.filter((item) =>
            item.toLowerCase().includes(inputs.country.toLowerCase())
        );
        setAllCountries(filteredCountries);
        if (inputs.country === "") {
            setAllCountries([
                "Crna Gora",
                "Srbija",
                "Hrvatska",
                "Bosna i Hercegovina",
                "Slovenija",
            ]);
        }
    }, [inputs.country]);

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
                <div className="add-line-input-container">
                    <input
                        type="text"
                        id="country"
                        value={inputs.country}
                        onChange={handleChange}
                    />
                    <div className="dropdown-container">
                        {inputs.country !== ""
                            ? allCountries.map((item) => (
                                  <DropDownCard
                                      item={item}
                                      key={item}
                                      onClick={handleSetSearch}
                                  />
                              ))
                            : null}
                    </div>
                </div>
                <label htmlFor="station-city">Grad:</label>
                <div className="add-line-input-container">
                    <input
                        type="text"
                        id="city"
                        value={inputs.city}
                        onChange={handleChange}
                    />
                    <div className="dropdown-container">
                        {inputs.city !== ""
                            ? allCities.map((item) => (
                                  <DropDownCard
                                      item={item}
                                      key={item}
                                      onClick={handleSetSearch}
                                  />
                              ))
                            : null}
                    </div>
                </div>
                <MapWrapper stations={[]} isAdmin={true} />
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
