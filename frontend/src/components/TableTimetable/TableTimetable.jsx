import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import "../styles/tabela-red-voznje.css";
import { TableTimetableHeader } from "./components/TableTimetableHeader/TableTimetableHeader";
import { TableTimetableRow } from "./components/TableTimetableRow/TableTimetableRow";
import { TableTimetableContent } from "./components/TableTimetableContent/TableTimetableContent";
import { getLines, getNumberOfPages } from "../../services/lines";
import PaginationNumbers from "../PaginationNumbers/PaginationNumbers";

export const TableTimetable = ({
    isEdit,
    handleDeleteClick,
    isAdmin,
    handleResponse,
    isActive,
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

    const [lines, setLines] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);

    console.log("act", isActive);
    const fetchLines = async () => {
        try {
            console.log("fetching lines", currentPage);
            const response = await getLines(isActive, currentPage);
            setLines(response);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchNumberOfPages = async () => {
        try {
            const response = await getNumberOfPages(isActive);
            setNumberOfPages(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchLines();
    }, [currentPage]);

    useEffect(() => {
        fetchNumberOfPages();
        fetchLines();
    }, []);

    useEffect(() => {
        console.log("lajns", lines);
    }, [lines]);

    return (
        <>
            <ul className="red-voznje-table">
                <TableTimetableHeader isEdit={isEdit} />
                {lines
                    ? lines.map((line) => (
                          <>
                              <TableTimetableRow
                                  departure={line}
                                  isEdit={isEdit}
                                  isAdmin={isAdmin}
                                  handleDeleteClick={handleDeleteClick}
                                  handleResponse={handleResponse}
                                  routeId={line.route_id}
                              />
                              <TableTimetableContent
                                  departure={line}
                                  isEdit={isEdit}
                                  isAdmin={isAdmin}
                              />
                          </>
                      ))
                    : null}
            </ul>
            <div className="pagination-numbers-container">
                <PaginationNumbers
                    selectedPageId={currentPage}
                    setPageId={setCurrentPage}
                    numberOfPages={numberOfPages}
                />
            </div>
        </>
    );
};
