import React from "react";
import "./add-line.css";
import { DropDownCard } from "../DropdownCard/DropdownCard";

export const AddLineStationModal = ({
    isOpen,
    setIsOpen,
    stationName,
    handleChange,
    sveStanice,
    handleSetStationName,
    arrivalTimeStation,
    departureTimeStation,
    priceStation,
    handleAddStation,
}) => {
    const handleButtonClick = (e) => {
        e.preventDefault();
        if (
            !stationName ||
            !arrivalTimeStation ||
            !departureTimeStation ||
            !priceStation
        ) {
            console.log("nemoze evoti karu");
            return;
        }
        handleAddStation(e);
        setIsOpen(false);
    };

    return (
        <div>
            <form className={"addstation-form" + (isOpen ? "" : " hidden")}>
                <label htmlFor="prevoznik">Stanica:</label>
                <label htmlFor="stationName">Naziv stanice:</label>
                <div className="add-line-input-container">
                    <input
                        className="addline-input"
                        type="text"
                        id="stationName"
                        name="stationName"
                        required
                        value={stationName.address}
                        onChange={handleChange}
                        style={
                            stationName === "" || sveStanice.length === 0
                                ? { borderRadius: "10px" }
                                : { borderRadius: "10px 10px 0 0" }
                        }
                    />{" "}
                    <div
                        id="filter-polaziste-container"
                        className="add-line-filter-container"
                    >
                        {stationName !== ""
                            ? sveStanice.map((item) => (
                                  <DropDownCard
                                      onClick={(e) =>
                                          handleSetStationName(e, item)
                                      }
                                      item={item.address}
                                      key={item.item_name}
                                  />
                              ))
                            : null}
                    </div>
                </div>
                <label htmlFor="arrivalTimeStation">Vrijeme dolaska:</label>
                <input
                    className="addline-input"
                    type="time"
                    id="arrivalTimeStation"
                    name="arrivalTimeStation"
                    required
                    value={arrivalTimeStation}
                    onChange={handleChange}
                />
                <label htmlFor="departureTimeStation">Vrijeme polaska:</label>
                <input
                    className="addline-input"
                    type="time"
                    id="departureTimeStation"
                    name="departureTimeStation"
                    required
                    value={departureTimeStation}
                    onChange={handleChange}
                />
                <label htmlFor="priceStation">Cijena:</label>
                <input
                    className="addline-input"
                    type="number"
                    id="priceStation"
                    name="priceStation"
                    required
                    value={priceStation}
                    onChange={handleChange}
                />
                <button type="submit" onClick={handleButtonClick}>
                    Dodaj Stanicu
                </button>
            </form>
            <div
                className={"overlay-add-station" + (isOpen ? "" : " hidden")}
                onClick={() => setIsOpen(false)}
            ></div>
        </div>
    );
};
