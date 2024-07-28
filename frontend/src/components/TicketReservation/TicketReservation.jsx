import "./ticketreservation.css";

export const TicketReservation = () => {
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
                                <h2>Ime i prezime:</h2>
                                <input type="text" />
                            </div>
                            <div>
                                <h2>Email:</h2>
                                <input type="email" />
                            </div>
                            <div>
                                <h2>Izaberite sjedište</h2>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="ticket-reservation-info">
                            <div>
                                <h2>Način plaćanja:</h2>
                                <label htmlFor="card">Kartica:</label>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="card"
                                />
                                <label htmlFor="in-person">Uživo:</label>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="in-person"
                                />
                            </div>
                            <div>
                                <h2>Finalni podaci:</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Libero asperiores sapiente
                                    excepturi voluptate suscipit ratione nobis
                                    quas illum adipisci unde iure debitis, quod,
                                    quam veritatis impedit quaerat. Molestias,
                                    minima ex?
                                </p>
                            </div>
                            <div>
                                <button onClick={handleModalClose}>
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
