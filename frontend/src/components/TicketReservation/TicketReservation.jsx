import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import "./ticket-reservation.css";

export const TicketReservation = () => {
    const { user } = useContext(AuthContext);

    const handleModalClose = () => {
        document
            .getElementById("ticket-reservation-modal")
            .classList.add("hidden");
        document.getElementById("overlay").classList.add("hidden");
        document.body.style.overflowY = "scroll";
    };

    return (
        <>
            <div className="hidden" id="ticket-reservation-modal">
                <p
                    className="ticket-reservation-close"
                    onClick={handleModalClose}
                >
                    &times;
                </p>
                <div className="ticket-reservation-container">
                    <h1>Rezervišite kartu</h1>
                    <div className="ticket-reservation-info-container">
                        <div className="ticket-reservation-info">
                            <div>
                                <h2>Ime i prezime:</h2><input className="addline-input" type="text" value={user.full_name} readOnly="readonly" />
                            </div>
                            <div>
                                <h2>Email:</h2>
                                <input className="addline-input" type="email" value={user.email} readOnly="readonly" />
                            </div>
                            <div>
                                <h2>Broj telefona:</h2>
                                <input className="addline-input" type="text" value={user.phone_number} readOnly="readonly" />
                            </div>
                            <div>
                                <button className="btnsty" onClick={handleModalClose}>
                                    Rezerviši
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div
                className="hidden"
                id="overlay"
                onClick={handleModalClose}
            ></div>
        </>
    );
};
