import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { postTicket } from "../../services/ticket";
import "./ticket-reservation.css";

export const TicketReservation = ({
    filterDate,
    price,
    route_id,
    company_id,
}) => {
    const { user } = useContext(AuthContext);

    const handleModalClose = () => {
        document
            .getElementById("ticket-reservation-modal")
            .classList.add("hidden");
        document.getElementById("overlay").classList.add("hidden");
        document.body.style.overflowY = "scroll";
    };

    const handleClick = async (e) => {
        e.preventDefault();
        const currentDate = new Date();
        let dayInd;
        if (filterDate) {
            dayInd = new Date(filterDate).getDay();
        } else {
            dayInd = currentDate.getDay();
        }
        let day;
        switch (dayInd) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;
            default:
                day = "";
                break;
        }
        const date = new Date().toISOString().split("T")[0];

        await postTicket({
            price: price,
            departure_date_time: filterDate ? filterDate : date,
            company_id: company_id,
            day_name: day,
            route_id: route_id,
        });
        window.location.reload();
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
                                <h2>Ime i prezime:</h2>
                                <input
                                    className="addline-input"
                                    type="text"
                                    value={user.full_name}
                                    readOnly="readonly"
                                />
                            </div>
                            <div>
                                <h2>Email:</h2>
                                <input
                                    className="addline-input"
                                    type="email"
                                    value={user.email}
                                    readOnly="readonly"
                                />
                            </div>
                            <div>
                                <h2>Broj telefona:</h2>
                                <input
                                    className="addline-input"
                                    type="text"
                                    value={user.phone_number}
                                    readOnly="readonly"
                                />
                            </div>
                            <div>
                                <button
                                    className="btnsty"
                                    onClick={handleClick}
                                >
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
