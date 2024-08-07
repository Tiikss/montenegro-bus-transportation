import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import "../styles/tabela-red-voznje.css";
import { TableTimetableHeader } from "./components/TableTimetableHeader/TableTimetableHeader";
import { TableTimetableRow } from "./components/TableTimetableRow/TableTimetableRow";
import { TableTimetableContent } from "./components/TableTimetableContent/TableTimetableContent";
import {
    getLines,
    getLinesFilteredByCity,
    getNumberOfPages,
    getNumberOfPagesFiltered,
} from "../../services/lines";
import { PaginationNumbers } from "../PaginationNumbers/PaginationNumbers";
import { getLinesFiltered } from "../../services/lines";
import { AuthContext } from "../../contexts/AuthContext";

export const TableTimetable = ({
    isEdit,
    handleDeleteClick,
    isAdmin,
    isCarrier,
    handleResponse,
    isActive,
    filter,
    city,
}) => {
    const { user } = useContext(AuthContext);

    const [lines, setLines] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);

    console.log("act", isActive);
    const fetchLines = async () => {
        try {
            if (filter) {
                const response = await getLinesFiltered(
                    isActive,
                    currentPage,
                    filter.start,
                    filter.end,
                    filter.date
                );
                console.log(filter);
                setLines(response);
            } else if (isCarrier) {
                const response = await getLines(
                    isActive,
                    currentPage,
                    user.company_id
                );
                setLines(response);
            } else if (isAdmin) {
                const response = await getLines(isActive, currentPage);
                setLines(response);
            } else if (city) {
                const response = await getLinesFilteredByCity(
                    isActive,
                    currentPage,
                    city
                );
                setLines(response);
            }
        } catch (error) {
            console.log(error);
        }
    };

    console.log(lines);

    const fetchNumberOfPages = async () => {
        try {
            if (isCarrier) {
                const response = await getNumberOfPages(
                    isActive,
                    user.company_id
                );
                setNumberOfPages(response);
            } else if (isAdmin) {
                const response = await getNumberOfPages(isActive);
                setNumberOfPages(response);
            } else if (city) {
                const response = await getNumberOfPagesFiltered(city);
                setNumberOfPages(response);
            } else if (filter) {
                const response = await getNumberOfPagesFiltered(
                    filter.start,
                    filter.end,
                    filter.date
                );
                setNumberOfPages(response);
            }
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
