import { useState, useEffect } from "react";
import { TableTimetable } from "../../components/TableTimetable/TableTimetable";
import { DropDownCard } from "../../components/DropdownCard/DropdownCard";
import "./timetable.css";
import { getCities } from "../../services/city";

export const Timetable = () => {
    const [city, setCity] = useState("");
    const [allCities, setAllCities] = useState([]);
    const [displayCity, setDisplayCity] = useState("");

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSetSearch = (e) => {
        setCity(e.target.innerText);
        setDisplayCity(e.target.innerText);
        setAllCities([]);
    };

    const fetchCities = async () => {
        try {
            const response = await getCities();
            setAllCities(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCities();
    }, []);

    useEffect(() => {
        const filteredStations = allCities.filter((station) =>
            station.city_name.toLowerCase().includes(city.toLowerCase())
        );
        setAllCities(filteredStations);
        if (city === "") {
            fetchCities();
        }
    }, [city]);



    return (
        <div className="red-voznje-content">
            <h1>Red vožnje</h1>

            <div className="choose-city-container">
                <input
                    type="text"
                    placeholder="Unesite željeni grad:"
                    id="cityTable"
                    value={city}
                    onChange={handleChange}
                    style={
                        city === "" || allCities.length === 0
                            ? { borderRadius: "10px" }
                            : { borderRadius: "10px 10px 0 0" }
                    }
                />
                <div className="dropdown-container">
                    {city !== ""
                        ? allCities.map((item) => (
                              <DropDownCard
                                  item={item.city_name}
                                  key={item}
                                  onClick={handleSetSearch}
                              />
                          ))
                        : null}
                </div>
            </div>
            {displayCity === "" ? null : (<><h2>Polasci sa stanice {displayCity}</h2>
            <TableTimetable isEdit={false} /></>)}
        </div>
    );
};
