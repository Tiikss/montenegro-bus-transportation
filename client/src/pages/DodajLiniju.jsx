import React, { useEffect, useState } from "react";
import "../styles/dodaj-liniju.css";
import Linija from "../components/Linija";
import DropDownCard from "../components/DropdownCard";
import DodajStanicuModal from "../components/DodajStanicuModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const DodajLiniju = () => {
    const [polazistaLista, setPolazistaLista] = useState([
        "Podgorica",
        "Niksic",
        "Bar",
        "Budva",
        "Kotor",
    ]);
    const [odredisteLista, setOdredisteLista] = useState([
        "Podgorica",
        "Niksic",
        "Bar",
        "Budva",
        "Kotor",
    ]);
    const [sveStanice, setSveStanice] = useState([
        "Podgorica",
        "Niksic",
        "Bar",
        "Budva",
        "Kotor",
    ]);

    const [stations, setStations] = useState([]);

    const [polaziste, setPolaziste] = useState("");
    const [odrediste, setOdrediste] = useState("");
    const [vrijemePolaska, setVrijemePolaska] = useState("00:00");
    const [vrijemeDolaska, setVrijemeDolaska] = useState("00:00");
    const [cijena, setCijena] = useState(0);

    const [nazivStanice, setNazivStanice] = useState("");
    const [vrijemeDolaskaStanica, setVrijemeDolaskaStanica] = useState("00:00");
    const [vrijemePolaskaStanica, setVrijemePolaskaStanica] = useState("00:00");
    const [cijenaStanica, setCijenaStanica] = useState(0);

    const [isEditLine, setIsEditLine] = useState(false);
    const [editStationIndex, setEditStationIndex] = useState(-1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "polaziste":
                setPolaziste(value);
                break;
            case "odrediste":
                setOdrediste(value);
                break;
            case "vrijemePolaska":
                setVrijemePolaska(value);
                break;
            case "vrijemeDolaska":
                setVrijemeDolaska(value);
                break;
            case "cijena":
                setCijena(value);
                break;
            case "nazivStanice":
                setNazivStanice(value);
                break;
            case "vrijemePolaskaStanica":
                setVrijemePolaskaStanica(value);
                break;
            case "vrijemeDolaskaStanica":
                setVrijemeDolaskaStanica(value);
                break;
            case "cijenaStanica":
                setCijenaStanica(value);
                break;
            default:
                break;
        }
    };

    const handleAddStation = (e) => {
        e.preventDefault();
        setSveStanice(["Podgorica", "Niksic", "Bar", "Budva", "Kotor"]);

        if (isEditLine) {
            let newStations = JSON.parse(JSON.stringify(stations));
            newStations = newStations.map((station) => {
                if (station.nazivStanice === nazivStanice) {
                    return {
                        nazivStanice,
                        vrijemeDolaskaStanica,
                        vrijemePolaskaStanica,
                        cijenaStanica,
                    };
                } else if (station.polaziste === polaziste) {
                    return {
                        polaziste,
                        vrijemePolaska,
                    };
                } else if (station.odrediste === odrediste) {
                    return {
                        odrediste,
                        vrijemeDolaska,
                    };
                }
                return station;
            });
            setStations(newStations);
            setIsEditLine(false);
            setNazivStanice("");
            setVrijemeDolaskaStanica("");
            setVrijemePolaskaStanica("");
            setCijenaStanica(0);
            return;
        }

        if (stations.length === 0) {
            const startStation = {
                polaziste,
                vrijemePolaska,
            };

            const endStation = {
                odrediste,
                vrijemeDolaska,
                cijena,
            };

            const station = {
                nazivStanice,
                vrijemeDolaskaStanica,
                vrijemePolaskaStanica,
                cijenaStanica,
            };

            setStations([startStation, station, endStation]);
        } else {
            const station = {
                nazivStanice,
                vrijemeDolaskaStanica,
                vrijemePolaskaStanica,
                cijenaStanica,
            };
            let newStations = JSON.parse(JSON.stringify(stations));
            newStations.splice(stations.length - 1, 0, station);
            setStations(newStations);
        }
        setNazivStanice("");
        setVrijemeDolaskaStanica("");
        setVrijemePolaskaStanica("");
        setCijenaStanica(0);
    };

    const handleEditClick = (e, index) => {
        e.preventDefault();
        const station = stations[index];
        setEditStationIndex(index);
        setNazivStanice(station.nazivStanice);
        setVrijemeDolaskaStanica(station.vrijemeDolaskaStanica);
        setVrijemePolaskaStanica(station.vrijemePolaskaStanica);
        setCijenaStanica(station.cijenaStanica);
        setIsEditLine(true);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (e, index) => {
        e.preventDefault();
        let newStations = JSON.parse(JSON.stringify(stations));
        newStations.splice(index, 1);
        setStations(newStations);
    };

    const handleSetPolaziste = (e) => {
        setPolaziste(e.target.innerText);
        setPolazistaLista([]);
    };

    const handleSetOdrediste = (e) => {
        setOdrediste(e.target.innerText);
        setOdredisteLista([]);
    };

    const handleSetNazivStanice = (e) => {
        setNazivStanice(e.target.innerText);
        setSveStanice([]);
    };

    const openStationModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    useEffect(() => {
        const filteredPolazista = polazistaLista.filter((item) =>
            item.toLowerCase().includes(polaziste.toLowerCase())
        );
        setPolazistaLista(filteredPolazista);
        if (polaziste === "") {
            setPolazistaLista(["Podgorica", "Niksic", "Bar", "Budva", "Kotor"]);
        }
    }, [polaziste]);

    useEffect(() => {
        const filteredOdrediste = odredisteLista.filter((item) =>
            item.toLowerCase().includes(odrediste.toLowerCase())
        );
        setOdredisteLista(filteredOdrediste);
        if (odrediste === "") {
            setOdredisteLista(["Podgorica", "Niksic", "Bar", "Budva", "Kotor"]);
        }
    }, [odrediste]);

    useEffect(() => {
        const filteredSveStanice = sveStanice.filter((item) =>
            item.toLowerCase().includes(nazivStanice.toLowerCase())
        );
        setSveStanice(filteredSveStanice);
        if (nazivStanice === "") {
            setSveStanice(["Podgorica", "Niksic", "Bar", "Budva", "Kotor"]);
        }
    }, [nazivStanice]);

    useEffect(() => {
        if (
            !polaziste ||
            !odrediste ||
            !vrijemePolaska ||
            !vrijemeDolaska ||
            !cijena
        )
            return;

        const tempStations = stations;

        const startStation = {
            polaziste,
            vrijemePolaska,
        };

        const endStation = {
            odrediste,
            vrijemeDolaska,
            cijena,
        };

        if (tempStations.length === 0) {
            setStations([startStation, endStation]);
            return;
        }

        tempStations[0] = startStation;
        tempStations[tempStations.length - 1] = endStation;

        setStations(tempStations);
    }, [polaziste, odrediste, vrijemePolaska, vrijemeDolaska, cijena]);

    return (
        <main className="addline-body">
            <h1>Dodaj liniju</h1>
            <div className="addline-forms">
                <form className="addline-form">
                    <label htmlFor="polaziste">Polazište:</label>
                    <div className="add-line-input-container dropdown-container">
                        <input
                            className="addline-input"
                            type="text"
                            id="polaziste"
                            name="polaziste"
                            required
                            value={polaziste}
                            onChange={handleChange}
                            style={
                                polaziste === "" || polazistaLista.length === 0
                                    ? { borderRadius: "10px" }
                                    : { borderRadius: "10px 10px 0 0" }
                            }
                        />{" "}
                        <div
                            id="filter-polaziste-container"
                            className="dropdown-container"
                        >
                            {polaziste !== ""
                                ? polazistaLista.map((item) => (
                                      <DropDownCard
                                          onClick={handleSetPolaziste}
                                          item={item}
                                          key={item.item_name}
                                      />
                                  ))
                                : null}
                        </div>
                    </div>
                    <label htmlFor="odrediste">Odredište:</label>
                    <div className="add-line-input-container">
                        <input
                            className="addline-input"
                            type="text"
                            id="odrediste"
                            name="odrediste"
                            required
                            value={odrediste}
                            onChange={handleChange}
                            style={
                                odrediste === "" || odredisteLista.length === 0
                                    ? { borderRadius: "10px" }
                                    : { borderRadius: "10px 10px 0 0" }
                            }
                        />{" "}
                        <div
                            id="filter-odrediste-container"
                            className="dropdown-container"
                        >
                            {odrediste !== ""
                                ? odredisteLista.map((item) => (
                                      <DropDownCard
                                          onClick={handleSetOdrediste}
                                          item={item}
                                          key={item.item_name}
                                      />
                                  ))
                                : null}
                        </div>
                    </div>
                    <label htmlFor="vrijemePolaska">Vrijeme polaska:</label>
                    <input
                        className="addline-input"
                        type="time"
                        id="vrijemePolaska"
                        name="vrijemePolaska"
                        required
                        value={vrijemePolaska}
                        onChange={handleChange}
                    />
                    <label htmlFor="vrijemeDolaska">Vrijeme dolaska:</label>
                    <input
                        className="addline-input"
                        type="time"
                        id="vrijemeDolaska"
                        name="vrijemeDolaska"
                        required
                        value={vrijemeDolaska}
                        onChange={handleChange}
                    />
                    <label htmlFor="cijena">Cijena:</label>
                    <input
                        className="addline-input"
                        type="number"
                        id="cijena"
                        name="cijena"
                        required
                        value={cijena}
                        onChange={handleChange}
                    />
                    <button onClick={openStationModal}>
                        <FontAwesomeIcon icon={faCirclePlus} /> Dodaj stanicu
                    </button>
                    <button type="submit">
                        <FontAwesomeIcon icon={faCirclePlus} /> Dodaj liniju
                    </button>
                </form>
            </div>
            <DodajStanicuModal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                nazivStanice={nazivStanice}
                handleChange={handleChange}
                sveStanice={sveStanice}
                handleSetNazivStanice={handleSetNazivStanice}
                vrijemeDolaskaStanica={vrijemeDolaskaStanica}
                vrijemePolaskaStanica={vrijemePolaskaStanica}
                cijenaStanica={cijenaStanica}
                handleAddStation={handleAddStation}
            />
            <Linija
                stations={stations}
                isEdit={true}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
            />
        </main>
    );
};

export default DodajLiniju;
