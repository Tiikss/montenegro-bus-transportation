import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import "../styles/tabela-red-voznje.css";
import { TableTimetableHeader } from "./components/TableTimetableHeader/TableTimetableHeader";
import { TableTimetableRow } from "./components/TableTimetableRow/TableTimetableRow";
import { TableTimetableContent } from "./components/TableTimetableContent/TableTimetableContent";
import { getLines, getNumberOfPages } from "../../services/lines";
import PaginationNumbers from "../PaginationNumbers/PaginationNumbers";
import { getLinesFiltered } from "../../services/lines";

export const TableTimetable = ({
    isEdit,
    handleDeleteClick,
    isAdmin,
    handleResponse,
    isActive,
    filter,
}) => {
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
            } else {
                const response = await getLines(isActive, currentPage);
                setLines(response);
            }
        } catch (error) {
            console.log(error);
        }
    };

    console.log(lines);

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
