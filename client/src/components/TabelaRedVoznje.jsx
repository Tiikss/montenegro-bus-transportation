import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/tabela-red-voznje.css";
import TabelaRedVoznjeHeader from "./TableRedVoznjeHeader";
import TableRedVoznjeRow from "./TableRedVoznjeRow";
import TableRedVoznjeContent from "./TableRedVoznjeContent";

const TabelaRedVoznje = ({ isEdit }) => {
    const [departures, setDepartures] = useState([{
        startingPoint: "Podgorica",
        destination: "Beograd",
        busID: "1",
        departureTime: "12:00",
        travelTime: "2h",
        arrivalTime: "14:00",
        carrier: "Lasta",
        price: "10€",
    },
    {
        startingPoint: "Podgorica",
        destination: "Novi sad",
        busID: "1",
        departureTime: "12:00",
        travelTime: "2h",
        arrivalTime: "14:00",
        carrier: "Lasta",
        price: "10€",
    }
    ]);

    return (
        <ul className="red-voznje-table">
            <TabelaRedVoznjeHeader isEdit={isEdit} />
            {departures ? departures.map((departure) => (
                <>
                    <TableRedVoznjeRow departure={departure} isEdit={isEdit}/>
                    <TableRedVoznjeContent departure={departure}/>
                </>
            )): null}
        </ul>
    );
};

export default TabelaRedVoznje;
