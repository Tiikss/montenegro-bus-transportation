import React from "react";
import "../styles/dodaj-liniju.css";
import Linija from "../components/Linija";

const DodajLiniju = () => {
    return (
        <main className="addline-body">
            <h1>Dodaj liniju</h1>
            <div className="addline-forms">
                <form className="addline-form">
                    <label htmlFor="polaziste">Polazište:</label>
                    <input
                        className="addline-input"
                        type="text"
                        id="polaziste"
                        name="polaziste"
                        required
                    />{" "}
                    {/* Search dropdown*/}
                    <label htmlFor="odrediste">Odredište:</label>
                    <input
                        className="addline-input"
                        type="text"
                        id="odrediste"
                        name="odrediste"
                        required
                    />{" "}
                    {/* Search dropdown*/}
                    <label htmlFor="vremePolaska">Vreme polaska:</label>
                    <input
                        className="addline-input"
                        type="time"
                        id="vremePolaska"
                        name="vremePolaska"
                        required
                    />
                    <label htmlFor="vremeDolaska">Vreme dolaska:</label>
                    <input
                        className="addline-input"
                        type="time"
                        id="vremeDolaska"
                        name="vremeDolaska"
                        required
                    />
                    <label htmlFor="cijena">Cijena:</label>
                    <input
                        className="addline-input"
                        type="number"
                        id="cijena"
                        name="cijena"
                        required
                    />
                    <button type="submit">Dodaj liniju</button>
                </form>
                <form className="addstation-form">
                    <label htmlFor="prevoznik">Stanica:</label>
                    <label htmlFor="nazivStanice">Naziv stanice:</label>
                    <input
                        className="addline-input"
                        type="text"
                        id="nazivStanice"
                        name="nazivStanice"
                        required
                    />{" "}
                    {/* Search dropdown*/}
                    <label htmlFor="vremeDolaska">Vreme dolaska:</label>
                    <input
                        className="addline-input"
                        type="time"
                        id="vremeDolaska"
                        name="vremeDolaska"
                        required
                    />
                    <label htmlFor="vremePolaska">Vreme polaska:</label>
                    <input
                        className="addline-input"
                        type="time"
                        id="vremePolaska"
                        name="vremePolaska"
                        required
                    />
                    <label htmlFor="cijena">Cijena:</label>
                    <input
                        className="addline-input"
                        type="number"
                        id="cijena"
                        name="cijena"
                        required
                    />
                    <button type="submit">Dodaj Stanicu</button>
                </form>
            </div>
            <Linija />
        </main>
    );
};

export default DodajLiniju;
