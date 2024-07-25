import React from "react";
import "../styles/dodaj-liniju.css";
import DropDownCard from "./DropdownCard";

const DodajStanicuModal = ({
    isOpen,
    setIsOpen,
    nazivStanice,
    handleChange,
    sveStanice,
    handleSetNazivStanice,
    vrijemeDolaskaStanica,
    vrijemePolaskaStanica,
    cijenaStanica,
    handleAddStation,
}) => {
    return (
        <div>
            <form className={"addstation-form" + (isOpen ? "" : " hidden")}>
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
                    <div
                        id="filter-polaziste-container"
                        className="add-line-filter-container"
                    >
                        {nazivStanice !== ""
                            ? sveStanice.map((item) => (
                                  <DropDownCard
                                      onClick={handleSetNazivStanice}
                                      item={item}
                                      key={item.item_name}
                                  />
                              ))
                            : null}
                    </div>
                </div>
                <label htmlFor="vrijemeDolaskaStanica">Vrijeme dolaska:</label>
                <input
                    className="addline-input"
                    type="time"
                    id="vrijemeDolaskaStanica"
                    name="vrijemeDolaskaStanica"
                    required
                    value={vrijemeDolaskaStanica}
                    onChange={handleChange}
                />
                <label htmlFor="vrijemePolaskaStanica">Vrijeme polaska:</label>
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
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        handleAddStation(e);
                        setIsOpen(false);
                    }}
                >
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

export default DodajStanicuModal;
