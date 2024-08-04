import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./add-line.css";
import { Line } from "../../components/Line/Line";
import { DropDownCard } from "../../components/DropdownCard/DropdownCard";
import { AddLineStationModal } from "../../components/AddStationModal/AddLineStationModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { getFilteredStations } from "../../services/stations";
import { AuthContext } from "../../contexts/AuthContext";
import { addLine } from "../../services/lines";

export const AddLine = () => {
    const navigate = useNavigate();
    const [polazistaLista, setPolazistaLista] = useState([
        "Podgorica",
        "Niksic",
        "Bar",
        "Budva",
        "Kotor",
    ]);
    const [destinationLista, setDestinationLista] = useState([
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

    const { user } = useContext(AuthContext);

    const [allStations, setAllStations] = useState([]);

    const [stations, setStations] = useState([]);

    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [departureTime, setDepartureTime] = useState("00:00");
    const [arrivalTime, setArrivalTime] = useState("00:00");
    const [price, setPrice] = useState(0);

    const [stationName, setStationName] = useState({});
    const [arrivalTimeStation, setArrivalTimeStation] = useState("00:00");
    const [departureTimeStation, setDepartureTimeStation] = useState("00:00");
    const [priceStation, setPriceStation] = useState(0);

    const [selectedDays, setSelectedDays] = useState([]);

    const [isEditLine, setIsEditLine] = useState(false);
    const [editStationIndex, setEditStationIndex] = useState(-1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "source":
                setSource(value);
                break;
            case "destination":
                setDestination(value);
                break;
            case "departureTime":
                setDepartureTime(value);
                break;
            case "arrivalTime":
                setArrivalTime(value);
                break;
            case "price":
                setPrice(value);
                break;
            case "stationName":
                setStationName(value);
                break;
            case "departureTimeStation":
                setDepartureTimeStation(value);
                break;
            case "arrivalTimeStation":
                setArrivalTimeStation(value);
                break;
            case "priceStation":
                setPriceStation(value);
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
                if (station.id === stationName.id) {
                    return {
                        station_id: stationName.id,
                        address: stationName.address,
                        city_name: stationName.city_name,
                        arrival_time: arrivalTimeStation,
                        departure_time: departureTimeStation,
                        price: priceStation,
                    };
                } else if (station.id === source.id) {
                    return {
                        station_id: source.id,
                        address: source.address,
                        city_name: source.city_name,
                        departure_time: departureTime,
                    };
                } else if (station.id === destination.id) {
                    return {
                        station_id: destination.id,
                        address: destination.address,
                        city_name: destination.city_name,
                        arrival_time: arrivalTime,
                        price: price,
                    };
                }
                return station;
            });
            setStations(newStations);
            setIsEditLine(false);
            setStationName({});
            setArrivalTimeStation("");
            setDepartureTimeStation("");
            setPriceStation(0);
            return;
        }

        if (stations.length === 0) {
            const startStation = {
                station_id: source.id,
                address: source.address,
                city_name: source.city_name,
                departure_time: departureTime,
            };

            const endStation = {
                station_id: destination.id,
                address: destination.address,
                city_name: destination.city_name,
                arrival_time: arrivalTime,
                price: price,
            };

            const station = {
                station_id: stationName.id,
                address: stationName.address,
                city_name: stationName.city_name,
                arrival_time: arrivalTimeStation,
                departure_time: departureTimeStation,
                price: priceStation,
            };

            setStations([startStation, station, endStation]);
        } else {
            const station = {
                station_id: stationName.id,
                address: stationName.address,
                city_name: stationName.city_name,
                arrival_time: arrivalTimeStation,
                departure_time: departureTimeStation,
                price: priceStation,
            };
            let newStations = JSON.parse(JSON.stringify(stations));
            newStations.splice(stations.length - 1, 0, station);
            setStations(newStations);
        }
        setStationName({});
        setArrivalTimeStation("");
        setDepartureTimeStation("");
        setPriceStation(0);
    };

    const handleEditClick = (e, index) => {
        e.preventDefault();
        const station = stations[index];
        setEditStationIndex(index);
        setStationName(station.stationName);
        setArrivalTimeStation(station.arrivalTimeStation);
        setDepartureTimeStation(station.departureTimeStation);
        setPriceStation(station.priceStation);
        setIsEditLine(true);
        setIsModalOpen(true);
    };

    const handleDeleteClick = (e, index) => {
        e.preventDefault();
        let newStations = JSON.parse(JSON.stringify(stations));
        newStations.splice(index, 1);
        setStations(newStations);
    };

    const handleSetSource = (e, item) => {
        setSource(item);
        setPolazistaLista([]);
    };

    const handleSetDestination = (e, item) => {
        setDestination(item);
        setDestinationLista([]);
    };

    const handleSetStationName = (e, item) => {
        setStationName(item);
        setSveStanice([]);
    };

    const handleSelectDay = (e) => {
        const { id, checked } = e.target;
        if (checked) {
            setSelectedDays([...selectedDays, { day_name: id }]);
        } else {
            setSelectedDays(selectedDays.filter((day) => day_name !== id));
        }
    };

    const openStationModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const fetchAllStations = async (filter, inputField) => {
        try {
            const response = await getFilteredStations(filter);
            if (inputField === "source") {
                setPolazistaLista(response);
            } else if (inputField === "destination") {
                setDestinationLista(response);
            } else if (inputField === "stationName") {
                setSveStanice(response);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const addLineApi = async (body) => {
        try {
            const response = await addLine(body);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddLineClick = async (e) => {
        e.preventDefault();
        const body = {
            stations: stations,
            company_id: user.company_id,
            days: selectedDays,
        };
        await addLineApi(body);
        navigate("/prevoznik-panel");
    };

    // useEffect(() => {
    //     const filteredPolazista = polazistaLista.filter((item) =>
    //         item.toLowerCase().includes(source.toLowerCase())
    //     );
    //     setPolazistaLista(filteredPolazista);
    //     if (source === "") {
    //         setPolazistaLista(["Podgorica", "Niksic", "Bar", "Budva", "Kotor"]);
    //     }
    // }, [source]);

    // useEffect(() => {
    //     const filtereddestination = destinationLista.filter((item) =>
    //         item.toLowerCase().includes(destination.toLowerCase())
    //     );
    //     setDestinationLista(filtereddestination);
    //     if (destination === "") {
    //         setDestinationLista([
    //             "Podgorica",
    //             "Niksic",
    //             "Bar",
    //             "Budva",
    //             "Kotor",
    //         ]);
    //     }
    // }, [destination]);

    // useEffect(() => {
    //     const filteredSveStanice = sveStanice.filter((item) =>
    //         item.toLowerCase().includes(stationName.toLowerCase())
    //     );
    //     setSveStanice(filteredSveStanice);
    //     if (stationName === "") {
    //         setSveStanice(["Podgorica", "Niksic", "Bar", "Budva", "Kotor"]);
    //     }
    // }, [stationName]);

    useEffect(() => {
        if (!source || !destination || !departureTime || !arrivalTime || !price)
            return;

        const tempStations = JSON.parse(JSON.stringify(stations));

        const startStation = {
            station_id: source.id,
            address: source.address,
            city_name: source.city_name,
            departure_time: departureTime,
        };

        const endStation = {
            station_id: destination.id,
            address: destination.address,
            city_name: destination.city_name,
            arrival_time: arrivalTime,
            price: price,
        };

        if (tempStations.length === 0) {
            setStations([startStation, endStation]);
            return;
        }

        tempStations[0] = startStation;
        tempStations[tempStations.length - 1] = endStation;

        setStations(tempStations);
    }, [source, destination, departureTime, arrivalTime, price]);

    // useEffect(() => {
    //     fetchAllStations("");
    // }, []);

    useEffect(() => {
        fetchAllStations(source, "source");
        console.log("polaziste", source);
    }, [source]);

    useEffect(() => {
        fetchAllStations(destination, "destination");
        console.log("destinacija", destination);
    }, [destination]);

    useEffect(() => {
        fetchAllStations(stationName, "stationName");
    }, [stationName]);

    useEffect(() => {
        console.log(selectedDays);
    }, [selectedDays]);
    return (
        <main className="addline-body">
            <h1>Dodaj liniju</h1>
            <div className="addline-forms">
                <form className="addline-form">
                    <label htmlFor="source">Polazište:</label>
                    <div className="add-line-input-container dropdown-container">
                        <input
                            className="addline-input"
                            type="text"
                            id="source"
                            name="source"
                            required
                            value={source.address}
                            onChange={handleChange}
                            style={
                                source === "" || polazistaLista.length === 0
                                    ? { borderRadius: "10px" }
                                    : { borderRadius: "10px 10px 0 0" }
                            }
                        />{" "}
                        <div
                            id="filter-source-container"
                            className="dropdown-container"
                        >
                            {source !== ""
                                ? polazistaLista.map((item) => (
                                      <DropDownCard
                                          onClick={(e) =>
                                              handleSetSource(e, item)
                                          }
                                          item={item}
                                          key={item.item_name}
                                      />
                                  ))
                                : null}
                        </div>
                    </div>
                    <label htmlFor="destination">Odredište:</label>
                    <div className="add-line-input-container">
                        <input
                            className="addline-input"
                            type="text"
                            id="destination"
                            name="destination"
                            required
                            value={destination.address}
                            onChange={handleChange}
                            style={
                                destination === "" ||
                                destinationLista.length === 0
                                    ? { borderRadius: "10px" }
                                    : { borderRadius: "10px 10px 0 0" }
                            }
                        />{" "}
                        <div
                            id="filter-destination-container"
                            className="dropdown-container"
                        >
                            {destination !== ""
                                ? destinationLista.map((item) => (
                                      <DropDownCard
                                          onClick={(e) =>
                                              handleSetDestination(e, item)
                                          }
                                          item={item}
                                          key={item.item_name}
                                      />
                                  ))
                                : null}
                        </div>
                    </div>
                    <label htmlFor="departureTime">Vrijeme polaska:</label>
                    <input
                        className="addline-input"
                        type="time"
                        id="departureTime"
                        name="departureTime"
                        required
                        value={departureTime}
                        onChange={handleChange}
                    />
                    <label htmlFor="arrivalTime">Vrijeme dolaska:</label>
                    <input
                        className="addline-input"
                        type="time"
                        id="arrivalTime"
                        name="arrivalTime"
                        required
                        value={arrivalTime}
                        onChange={handleChange}
                    />
                    <label htmlFor="price">price:</label>
                    <input
                        className="addline-input"
                        type="number"
                        id="price"
                        name="price"
                        required
                        value={price}
                        onChange={handleChange}
                    />
                    <label htmlFor="dani">Dani vožnje:</label>
                    <div className="days-container">
                        <label htmlFor="monday">Ponedjeljak</label>
                        <input
                            type="checkbox"
                            id="Monday"
                            name="monday"
                            onChange={handleSelectDay}
                        />
                        <label htmlFor="tuesday">Utorak</label>
                        <input
                            type="checkbox"
                            id="Tuesday"
                            name="tuesday"
                            onChange={handleSelectDay}
                        />
                        <label htmlFor="wednesday">Srijeda</label>
                        <input
                            type="checkbox"
                            id="Wednesday"
                            name="wednesday"
                            onChange={handleSelectDay}
                        />
                        <label htmlFor="thursday">Četvrtak</label>
                        <input
                            type="checkbox"
                            id="Thursday"
                            name="thursday"
                            onChange={handleSelectDay}
                        />
                        <label htmlFor="friday">Petak</label>
                        <input
                            type="checkbox"
                            id="Friday"
                            name="friday"
                            onChange={handleSelectDay}
                        />
                        <label htmlFor="saturday">Subota</label>
                        <input
                            type="checkbox"
                            id="Saturday"
                            name="saturday"
                            onChange={handleSelectDay}
                        />
                        <label htmlFor="sunday">Nedjelja</label>
                        <input
                            type="checkbox"
                            id="Sunday"
                            name="sunday"
                            onChange={handleSelectDay}
                        />
                    </div>

                    <button onClick={openStationModal}>
                        <FontAwesomeIcon icon={faCirclePlus} /> Dodaj stanicu
                    </button>
                    <button type="submit" onClick={handleAddLineClick}>
                        <FontAwesomeIcon icon={faCirclePlus} /> Dodaj liniju
                    </button>
                </form>
            </div>
            <AddLineStationModal
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                stationName={stationName}
                handleChange={handleChange}
                sveStanice={sveStanice}
                handleSetStationName={handleSetStationName}
                arrivalTimeStation={arrivalTimeStation}
                departureTimeStation={departureTimeStation}
                priceStation={priceStation}
                handleAddStation={handleAddStation}
            />
            <Line
                stations={stations}
                isEdit={true}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
            />
        </main>
    );
};
