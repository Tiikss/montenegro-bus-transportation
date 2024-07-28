import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import "../styles/tabela-red-voznje.css";
import { TableTimetableHeader } from "./components/TableTimetableHeader/TableTimetableHeader";
import { TableTimetableRow } from "./components/TableTimetableRow/TableTimetableRow";
import { TableTimetableContent } from "./components/TableTimetableContent/TableTimetableContent";

export const TableTimetable = ({
    isEdit,
    handleDeleteClick,
    isAdmin,
    handleResponse,
}) => {
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
            <TableTimetableHeader isEdit={isEdit} />
            {departures
                ? departures.map((departure) => (
                      <>
                          <TableTimetableRow
                              departure={departure}
                              isEdit={isEdit}
                              isAdmin={isAdmin}
                              handleDeleteClick={handleDeleteClick}
                              handleResponse={handleResponse}
                          />
                          <TableTimetableContent
                              departure={departure}
                              isEdit={isEdit}
                              isAdmin={isAdmin}
                          />
                      </>
                  ))
                : null}
        </ul>
    );
};
