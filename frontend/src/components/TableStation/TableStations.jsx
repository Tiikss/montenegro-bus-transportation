import React, { useEffect, useState } from "react";
import "./table-stations.css";
import { MapWrapper } from "../MapWrapper/MapWrapper";
import {
    getAllStations,
    deleteStation,
    addStation,
    getNumberOfPages,
} from "../../services/stations";
import PaginationNumbers from "../PaginationNumbers/PaginationNumbers";
import { DropDownCard } from "../DropdownCard/DropdownCard";

export const TableStations = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputData, setInputData] = useState({
        country: "",
        city: "",
    });
    const [stations, setStations] = useState([]);
    const [selectedPoint, setSelectedPoint] = useState({ lat: 42, lng: 18 });
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
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

    console.log(inputData);

    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    const handleAddNewStation = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleAddStationApi = async (e) => {
        e.preventDefault();
        await addStation({
            phone_number: "123456789",
            address: inputData.station_name,
            city_name: inputData.station_city,
            country_name: inputData.station_country,
            latitude: selectedPoint.lat.toFixed(7),
            longitude: selectedPoint.lng.toFixed(7),
        });
        fetchNumberOfPages();
    };

    const handleDeleteStation = async (e, id) => {
        e.preventDefault();
        try {
            const response = deleteStation(id);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchStations = async () => {
        try {
            const response = await getAllStations(currentPage);
            setStations(response);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchNumberOfPages = async () => {
        try {
            const response = await getNumberOfPages();
            setNumberOfPages(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchStations();
    }, []);

    useEffect(() => {
        fetchNumberOfPages();
    }, [stations]);

    useEffect(() => {
        fetchStations();
    }, [currentPage]);

    const handleSetSearch = (e) => {
        setInputData((prev) => ({
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
            item.toLowerCase().includes(inputData.city.toLowerCase())
        );
        setAllCities(filteredCities);
        if (inputData.city === "") {
            setAllCities(["Podgorica", "Niksic", "Bar", "Budva", "Kotor"]);
        }
    }, [inputData.city]);

    useEffect(() => {
        const filteredCountries = allCountries.filter((item) =>
            item.toLowerCase().includes(inputData.country.toLowerCase())
        );
        setAllCountries(filteredCountries);
        if (inputData.country === "") {
            setAllCountries([
                "Crna Gora",
                "Srbija",
                "Hrvatska",
                "Bosna i Hercegovina",
                "Slovenija",
            ]);
        }
    }, [inputData.country]);

    return (
        <>
            <button className="adminpanel-button" onClick={handleAddNewStation}>
                Dodaj stanicu
            </button>

            <table className="tabela-stanice">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ime</th>
                        <th>Drzava</th>
                        <th>Grad</th>
                        <th>Geografska sirina</th>
                        <th>Geografska duzina</th>
                        <th>Izbrisi</th>
                    </tr>
                </thead>
                <tbody>
                    {stations.map(
                        (
                            station,
                            index // odje umjesto index trba station_id da stoji da se izmijeni obavezno!!!!
                        ) => (
                            <tr key={station.id}>
                                <td>{station.id}</td>
                                <td>{station.address}</td>
                                <td>{station.country_name}</td>
                                <td>{station.city_name}</td>
                                <td>{station.latitude}</td>
                                <td>{station.longitude}</td>
                                <td>
                                    <button
                                        className="adminpanel-button"
                                        onClick={(e) =>
                                            handleDeleteStation(e, station.id)
                                        }
                                    >
                                        Izbrisi
                                    </button>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
            <form
                className={"new-station-modal" + (isModalOpen ? "" : " hidden")}
            >
                <h2>Dodaj novu stanicu</h2>
                <label htmlFor="station-name">Ime:</label>
                <input
                    type="text"
                    id="station-name"
                    name="station_name"
                    required
                    onChange={handleChange}
                />
                <label htmlFor="station-country">Drzava:</label>

                <div className="add-line-input-container">
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={inputData.country}
                        onChange={handleChange}
                    />
                    <div className="dropdown-container">
                        {inputData.country !== ""
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
                        name="city"
                        value={inputData.city}
                        onChange={handleChange}
                    />
                    <div className="dropdown-container">
                        {inputData.city !== ""
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
                <button
                    className="adminpanel-button"
                    onClick={handleAddStationApi}
                >
                    Dodaj stanicu
                </button>
            </form>
            <div
                className={
                    "overlay-new-station" + (isModalOpen ? "" : " hidden")
                }
                onClick={() => setIsModalOpen(false)}
            ></div>
            <div className="pagination-numbers-container">
                <PaginationNumbers
                    selectedPageId={currentPage}
                    setPageId={setCurrentPage}
                    numberOfPages={numberOfPages}
                />
            </div>
        </>
    );
};
