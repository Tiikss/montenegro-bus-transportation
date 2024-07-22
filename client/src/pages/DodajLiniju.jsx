import React, { useEffect, useState } from "react";
import "../styles/dodaj-liniju.css";
import Linija from "../components/Linija";
import DropDownCard from "../components/DropdownCard";

const DodajLiniju = () => {
    const [polazistaLista, setPolazistaLista] = useState([]);
    const [odredisteLista, setOdredisteLista] = useState([]);
    const [sveStanice, setSveStanice] = useState([]);

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
            console.log(newStations);
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
            };

            const station = {
                nazivStanice,
                vrijemeDolaskaStanica,
                vrijemePolaskaStanica,
                cijenaStanica,
                cijena,
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
        setNazivStanice(station.nazivStanice);
        setVrijemeDolaskaStanica(station.vrijemeDolaskaStanica);
        setVrijemePolaskaStanica(station.vrijemePolaskaStanica);
        setCijenaStanica(station.cijenaStanica);
        setIsEditLine(true);
    };

    const handleDeleteClick = (e, index) => {
        e.preventDefault();
        let newStations = JSON.parse(JSON.stringify(stations));
        newStations.splice(index, 1);
        setStations(newStations);
    };

    useEffect(() => {
        console.log(stations);
    }, [stations]);

    useEffect(() => {
        const filteredPolazista = polazistaLista.filter((item) =>
            item.toLowerCase().includes(polaziste.toLowerCase())
        );
        setPolazistaLista(filteredPolazista);
        if(polaziste===""){
            setPolazistaLista(["Podgorica", "Niksic", "Bar", "Budva", "Kotor"]);
        }
    },[polaziste]);
    
    useEffect(() => {
        const filteredOdrediste = odredisteLista.filter((item) =>
            item.toLowerCase().includes(odrediste.toLowerCase())
        );
        setOdredisteLista(filteredOdrediste);
        if(odrediste===""){
            setOdredisteLista(["Podgorica", "Niksic", "Bar", "Budva", "Kotor"]);
        }
    },[odrediste]);

    useEffect(() => {
        const filteredSveStanice = sveStanice.filter((item) =>
            item.toLowerCase().includes(nazivStanice.toLowerCase())
        );
        setSveStanice(filteredSveStanice);
        if(nazivStanice===""){
            setSveStanice(["Podgorica", "Niksic", "Bar", "Budva", "Kotor"]);
        }
    },[nazivStanice]);

    console.log(polazistaLista)

    return (
        <main className="addline-body">
            <h1>Dodaj liniju</h1>
            <div className="addline-forms">
                <form className="addline-form">
                    <label htmlFor="polaziste">Polazište:</label>
                    <div className="add-line-input-container">
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
                        <div id="filter-polaziste-container" className="add-line-filter-container">
                            {polaziste !== ""
                                ? polazistaLista.map((item) => (
                                    <DropDownCard item={item} key={item.item_name} />
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
                        <div id="filter-odrediste-container" className="add-line-filter-container">
                            {odrediste !== ""
                                ? odredisteLista.map((item) => (
                                    <DropDownCard item={item} key={item.item_name} />
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
                    <button type="submit">Dodaj liniju</button>
                </form>
                <form className="addstation-form">
                    <label htmlFor="prevoznik">Stanica:</label>
                    <label htmlFor="nazivStanice">Naziv stanice:</label>
                    <div className="add-line-input-container">
                        <input
                            className="addline-input"
                            type="text"
                            id="nazivStanice"
                            name="nazivStanice"
                            required
                            value={nazivStanice}
                            onChange={handleChange}
                            style={
                                nazivStanice === "" || sveStanice.length === 0
                                  ? { borderRadius: "10px" }
                                  : { borderRadius: "10px 10px 0 0" }
                              }
                        />{" "}
                        <div id="filter-polaziste-container" className="add-line-filter-container">
                            {nazivStanice !== ""
                                ? sveStanice.map((item) => (
                                    <DropDownCard item={item} key={item.item_name} />
                                ))
                                : null}
                        </div>
                    </div>
                    <label htmlFor="vrijemeDolaskaStanica">
                        Vrijeme dolaska:
                    </label>
                    <input
                        className="addline-input"
                        type="time"
                        id="vrijemeDolaskaStanica"
                        name="vrijemeDolaskaStanica"
                        required
                        value={vrijemeDolaskaStanica}
                        onChange={handleChange}
                    />
                    <label htmlFor="vrijemePolaskaStanica">
                        Vrijeme polaska:
                    </label>
                    <input
                        className="addline-input"
                        type="time"
                        id="vrijemePolaskaStanica"
                        name="vrijemePolaskaStanica"
                        required
                        value={vrijemePolaskaStanica}
                        onChange={handleChange}
                    />
                    <label htmlFor="cijenaStanica">Cijena:</label>
                    <input
                        className="addline-input"
                        type="number"
                        id="cijenaStanica"
                        name="cijenaStanica"
                        required
                        value={cijenaStanica}
                        onChange={handleChange}
                    />
                    <button type="submit" onClick={handleAddStation}>
                        Dodaj Stanicu
                    </button>
                </form>
            </div>
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
