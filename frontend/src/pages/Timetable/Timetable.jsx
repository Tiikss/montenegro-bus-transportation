import { useState, useEffect } from "react";
import { TableTimetable } from "../../components/TableTimetable/TableTimetable";
import { DropDownCard } from "../../components/DropdownCard/DropdownCard";
import "./timetable.css";

export const Timetable = () => {
    const [city, setCity] = useState("");
    const [allCities, setAllCities] = useState([
        "Podgorica",
        "Niksic",
        "Bar",
        "Budva",
        "Kotor",
    ]);
    const [displayCity, setDisplayCity] = useState("");

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSetSearch = (e) => {
        setCity(e.target.innerText);
        setDisplayCity(e.target.innerText);
        setAllCities([]);
    };

    const handleClick = (e) => {
        const content = e.target.parentElement.parentElement.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.padding = "0 24px";
            content.style.maxHeight = null;
            content.style.marginBottom = "0";
            content.style.border = "none";
        } else {
            content.style.border = "1px solid #e0e0e0";
            content.style.marginBottom = "25px";
            content.style.padding = "40px 24px";
            content.style.maxHeight =
                content.childNodes[0].childNodes[0].scrollHeight + 40 + "px";
        }
    };

    useEffect(() => {
        const filteredStations = allCities.filter((station) =>
            station.toLowerCase().includes(city.toLowerCase())
        );
        setAllCities(filteredStations);
        if (city === "") {
            setAllCities(["Podgorica", "Niksic", "Bar", "Budva", "Kotor"]);
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
                                  item={item}
                                  key={item}
                                  onClick={handleSetSearch}
                              />
                          ))
                        : null}
                </div>
            </div>
            <h2>Polasci sa stanice {displayCity}</h2>
            <TableTimetable isEdit={false} />
        </div>
    );
};
