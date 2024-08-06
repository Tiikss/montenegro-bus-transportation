import React, { useState, useEffect } from "react";
import "./profile.css";
import { PaginationNumbers } from "../../components/PaginationNumbers/PaginationNumbers";
import { getAllTickets, getNumberOfPages } from "../../services/ticket";
import { TicketCard } from "./components/TicketCard/TicketCard";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EditProfileModal } from "./components/EditProfileModal/EditProfileModal";

export const Profile = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    useEffect(() => {
        const fetchTicketsData = async () => {
            const response = await getAllTickets(currentPage);
            setTickets(response);
        };

        fetchNumberOfPages();
        fetchTicketsData();
    }, [currentPage]);

    const fetchNumberOfPages = async () => {
        try {
            const response = await getNumberOfPages(1);
            setNumberOfPages(response);
        } catch (error) {
            console.log(error);
        }
    };

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
                        {user.phone_number != "000000000" && (
                            <p>Broj telefon: {user.phone_number}</p>
                        )}
                        <button
                            className="btnsty"
                            id="modal-btn"
                            onClick={handleOpenModal}
                        >
                            Broj telefona
                        </button>
                        <button
                            className="btnsty"
                            id="logout-btn"
                            onClick={handleLogout}
                        >
                            Odjavi se
                        </button>
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
            <EditProfileModal
                show={showModal}
                handleClose={handleCloseModal}
                user={user}
            />
        </main>
    );
};
