import React, { useState, useEffect } from "react";
import "./profile.css";
import PaginationNumbers from "../../components/PaginationNumbers/PaginationNumbers";
import { getAllTickets } from "../../services/ticket";
import { TicketCard } from "./components/TicketCard/TicketCard";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export const Profile = () => {
    const [tickets, setTickets] = useState([]);
    const [lines, setLines] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchTicketsData = async () => {
            const response = await getAllTickets(currentPage);
            setTickets(response);
        };

        fetchTicketsData();
    }, []);

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

    if (!user) {
        return <p>Učitavanje podataka...</p>;
    }

    return (
        <main id="profile-body">
            <div className="user-profile-container">
                <div id="pom-profile">
                    <div className="user-info">
                        <p>
                            <strong>Ime i prezime:</strong> {user.full_name}
                        </p>
                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>
                    </div>
                </div>

                <h2>Kupljene karte</h2>
                <div className="tickets-container">
                    {tickets.map((ticket) => (
                        <TicketCard key={ticket.id} ticket={ticket} />
                    ))}
                </div>

                <div className="pagination-numbers-container">
                    <PaginationNumbers
                        selectedPageId={currentPage}
                        setPageId={setCurrentPage}
                        numberOfPages={numberOfPages}
                    />
            </div>
            </div>
        </main>
    );
};
