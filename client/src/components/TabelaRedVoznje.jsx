import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import "../styles/tabela-red-voznje.css";
import TabelaRedVoznjeHeader from "./TableRedVoznjeHeader";
import TableRedVoznjeRow from "./TableRedVoznjeRow";
import TableRedVoznjeContent from "./TableRedVoznjeContent";

const TabelaRedVoznje = ({ isEdit, handleDeleteClick }) => {
    const [departures, setDepartures] = useState([
        {
            startingPoint: "Podgorica",
            destination: "Beograd",
            busID: "1",
            departureTime: "12:00",
            travelTime: "2h",
            arrivalTime: "14:00",
            carrier: "Lasta",
            price: "10€",
            stations: [
                {
                    polaziste: "Podgorica",
                    vrijemePolaska: "12:00",
                    lat: "42.44111",
                    lng: "19.26361",
                },
                {
                    nazivStanice: "Danilovgrad",
                    vrijemeDolaskaStanica: "12:30",
                    vrijemePolaskaStanica: "12:35",
                    cijenaStanica: "5€",
                    cijena: "10€",
                    lat: "42.44111",
                    lng: "19.26361",
                },
                {
                    odrediste: "Bar",
                    vrijemeDolaska: "14:00",
                    lat: "42.09807",
                    lng: "19.09494",
                },
            ],
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
            stations: [
                {
                    polaziste: "Podgorica",
                    vrijemePolaska: "12:00",
                    lat: "42.44111",
                    lng: "19.26361",
                },
                {
                    nazivStanice: "Danilovgrad",
                    vrijemeDolaskaStanica: "12:30",
                    vrijemePolaskaStanica: "12:35",
                    cijenaStanica: "5€",
                    cijena: "10€",
                    lat: "42.44111",
                    lng: "19.26361",
                },
                {
                    odrediste: "Bar",
                    vrijemeDolaska: "14:00",
                    lat: "42.09807",
                    lng: "19.09494",
                },
            ],
        },
    ]);

    return (
        <ul className="red-voznje-table">
            <TabelaRedVoznjeHeader isEdit={isEdit} />
            {departures
                ? departures.map((departure) => (
                      <>
                          <TableRedVoznjeRow
                              departure={departure}
                              isEdit={isEdit}
                              handleDeleteClick={handleDeleteClick}
                          />
                          <TableRedVoznjeContent
                              departure={departure}
                              isEdit={isEdit}
                          />
                      </>
                  ))
                : null}
        </ul>
    );
};

export default TabelaRedVoznje;
