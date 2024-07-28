import React, { useState, useEffect } from "react";
import "./profile.css";
import { Pagination } from "../../components/Pagination/Pagination";

export const Profile = () => {
    const [user, setUser] = useState(null);
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const ticketsPerPage = 4;

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = {
                name: "Marko Marković",
                email: "marko.markovic@example.com",
            };
            setUser(userData);
        };

        const fetchTicketsData = async () => {
            const ticketsData = [
                {
                    id: 1,
                    destination: "Podgorica - Bar",
                    date: "15. jul 2024.",
                    price: "5.00 €",
                    status: "Ranije kupljena",
                },
                {
                    id: 2,
                    destination: "Nikšić - Budva",
                    date: "20. jul 2024.",
                    price: "7.00 €",
                    status: "Ranije kupljena",
                },
                {
                    id: 3,
                    destination: "Podgorica - Herceg Novi",
                    date: "25. jul 2024.",
                    price: "10.00 €",
                    status: "Nova",
                },
                {
                    id: 4,
                    destination: "Bar - Ulcinj",
                    date: "30. jul 2024.",
                    price: "4.00 €",
                    status: "Nova",
                },
                {
                    id: 5,
                    destination: "Podgorica - Kotor",
                    date: "5. avgust 2024.",
                    price: "6.50 €",
                    status: "Nova",
                },
                {
                    id: 6,
                    destination: "Cetinje - Budva",
                    date: "10. avgust 2024.",
                    price: "5.00 €",
                    status: "Ranije kupljena",
                },
                {
                    id: 7,
                    destination: "Podgorica - Tivat",
                    date: "15. avgust 2024.",
                    price: "8.00 €",
                    status: "Nova",
                },
                {
                    id: 8,
                    destination: "Nikšić - Herceg Novi",
                    date: "20. avgust 2024.",
                    price: "9.00 €",
                    status: "Ranije kupljena",
                },
                {
                    id: 9,
                    destination: "Bar - Kotor",
                    date: "25. avgust 2024.",
                    price: "6.00 €",
                    status: "Nova",
                },
            ];
            setTickets(ticketsData);
        };

        fetchUserData();
        fetchTicketsData();
    }, []);

    if (!user) {
        return <p>Učitavanje podataka...</p>;
    }

    const indexOfLastTicket = currentPage * ticketsPerPage;
    const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
    const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);

    const totalPages = Math.ceil(tickets.length / ticketsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <main id="profile-body">
            <div className="user-profile-container">
                <div id="pom-profile">
                    <div className="user-info">
                        <p>
                            <strong>Ime i prezime:</strong> {user.name}
                        </p>
                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>
                    </div>
                </div>

                <h2>Kupljene karte</h2>
                <div className="tickets-container">
                    {currentTickets.map((ticket) => (
                        <div key={ticket.id} className="ticket-card">
                            <h3>{ticket.destination}</h3>
                            <p>
                                <strong>Datum:</strong> {ticket.date}
                            </p>
                            <p>
                                <strong>Cijena:</strong> {ticket.price}
                            </p>
                            <p>
                                <strong>Status:</strong> {ticket.status}
                            </p>
                        </div>
                    ))}
                </div>

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    paginate={paginate}
                />
            </div>
        </main>
    );
};
