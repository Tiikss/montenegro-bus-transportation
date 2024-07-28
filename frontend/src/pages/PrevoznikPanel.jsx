import React, { useEffect, useState } from "react";
import "../styles/prevoznik-panel.css";
import { TabelaRedVoznje } from "../components/TabelaRedVoznje";
import { ModalWindow } from "../components/ModalWindow";
import { Link } from "react-router-dom";

export const PrevoznikPanel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});
    const [modalResponse, setModalResponse] = useState(false);

    const handleDeleteClick = (e) => {
        e.preventDefault();
        console.log("Delete clicked");
        setModalData({
            title: "Brisanje linije",
            message: "Da li ste sigurni da zelite obrisati ovu liniju?",
            isConfirmation: true,
            isOpen: true,
            setResponse: setModalResponse,
        });
        setIsModalOpen(true);
    };

    return (
        <main className="prevoznik-body">
            <h1>Ime prevoznika</h1>
            <Link to="/dodaj-liniju" className="prevoznik-newline-button">
                Nova linija
            </Link>
            <h2>Aktivne linije</h2>
            <TabelaRedVoznje
                isEdit={true}
                handleDeleteClick={handleDeleteClick}
            />
            <h2>Linije na cekanju</h2>
            <TabelaRedVoznje
                isEdit={true}
                handleDeleteClick={handleDeleteClick}
            />
            {isModalOpen && (
                <ModalWindow
                    title={modalData.title}
                    message={modalData.message}
                    isConfirmation={modalData.isConfirmation}
                    isOpen={modalData.isOpen}
                    setIsOpen={setIsModalOpen}
                    setResponse={modalData.setResponse}
                />
            )}
        </main>
    );
};
