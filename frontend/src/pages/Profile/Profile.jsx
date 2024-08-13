import React, { useState, useEffect } from "react";
import "./profile.css";
import { PaginationNumbers } from "../../components/PaginationNumbers/PaginationNumbers";
import { getAllTickets, getNumberOfPages } from "../../services/ticket";
import { TicketCard } from "./components/TicketCard/TicketCard";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { EditProfileModal } from "./components/EditProfileModal/EditProfileModal";
import { Link } from "react-router-dom";

export const Profile = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [tickets, setTickets] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const { user, setUser, logout } = useContext(AuthContext);
    const value = localStorage.getItem('theme');

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

    const boxShadow = value === 'light' ? '0px 4px 6px #00000033' : '0px 4px 6px #9e9e9e33';
    const bckColor = value === 'light' ? '#f9f9f9' : '#121212';
    const txtColor = value === 'light' ? 'black' : 'white';

    return (
        <main id="profile-body">
            <div className="user-profile-container">
                <div id="pom-profile">
                    <div className="user-info" style={{boxShadow: `${boxShadow}`, backgroundColor: `${bckColor}`, color: `${txtColor}`}}>
                        <p>
                            <strong>Ime i prezime:</strong> {user.full_name}
                        </p>
                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>
                        {user.phone_number != "000000000" && (
                            <p>
                                <strong>Broj telefon:</strong>{" "}
                                {user.phone_number}
                            </p>
                        )}
                        <Link
                            style={{
                                cursor: "pointer",
                                color: "#ba0c0e",
                                textDecoration: "underline",
                            }}
                            id="modal-btn"
                            onClick={handleOpenModal}
                        >
                            {user.phone_number == "000000000"
                                ? "Dodaj broj telefona"
                                : "Izmijeni broj telefona"}
                        </Link>
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
                setUser={setUser}
            />
        </main>
    );
};
