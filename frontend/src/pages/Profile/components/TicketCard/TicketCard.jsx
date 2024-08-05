import React from "react";
import "./ticketCard.css";

export const TicketCard = ({ ticket }) => {
    return (
        <div key={ticket.id} className="ticket-card">
            <h3>{ticket.route_id}</h3>
            <p>
                <strong>Datum:</strong> {ticket.departure_date_time}
            </p>
            <p>
                <strong>Cijena:</strong> {ticket.price}
            </p>
        </div>
    );
};