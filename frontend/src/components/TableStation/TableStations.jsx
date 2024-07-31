import React, { useEffect, useState } from "react";
import "./table-stations.css";
import { MapWrapper } from "../MapWrapper/MapWrapper";
import { getAllStations, deleteStation } from "../../services/stations";
import { addStation } from "../../services/stations";

export const TableStations = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [stations, setStations] = useState([]);

    const handleAddNewStation = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleAddStationApi = async (e) => {
        e.preventDefault();
        await addStation({
            phone_number: "123456789",
            address: "Neka adresa",
            city_name: "Budva",
            country_name: "Montenegro",
            latitude: 12.3,
            longitude: 12.3,
        });
    };

    const handleDeleteStation = async (e, id) => {
        e.preventDefault();
        try {
            const response = deleteStation(id);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchStations = async () => {
            try {
                const response = await getAllStations();
                setStations(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchStations();
    }, []);

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
                                <td>index</td>
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
        </>
    );
};
