import React, { useEffect, useState } from "react";
import "./change-password.css";
import { changePassword } from "../../services/auth";
import { ModalWindow } from "../../components/ModalWindow/ModalWindow";
import { useNavigate } from "react-router-dom";

export const ChangePassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleClick = (e) => {
        e.preventDefault();
        try {
            changePassword(email);
            setIsModalOpen(true);
            setModalData({
                title: "Uspješno ste poslali zahtjev za promjenu lozinke!",
                message:
                    "Link za promjenu lozinke poslat je na vaš email. Molimo vas da provjerite vaš email.",
            });
        } catch (error) {
            console.log(error);
            setIsModalOpen(true);
            setModalData({
                title: "Greška!",
                message:
                    "Došlo je do greške prilikom slanja zahtjeva. Molimo vas pokušajte ponovo.",
            });
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            setTimeout(() => {
                setIsModalOpen(false);
                navigate("/login");
            }, 3000);
        }
    }, [isModalOpen]);

    return (
        <div className="change-password-content">
            <h1>Promjena lozinke</h1>
            <div className="change-password-container">
                <form className="change-password-form">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        className="btnsty"
                        type="submit"
                        onClick={handleClick}
                    >
                        Posalji zahtjev
                    </button>
                </form>
            </div>
            <ModalWindow
                isOpen={isModalOpen}
                setIsOpen={setIsModalOpen}
                title={modalData.title}
                message={modalData.message}
            />
        </div>
    );
};
