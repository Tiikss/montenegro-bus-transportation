import React, { useEffect } from "react";
import "./ticketCard.css";
import { getLineById } from "../../../../services/lines";
import { useState } from "react";

export const TicketCard = ({ ticket }) => {
    const [line, setLine] = useState(null);
    const [date, setDate] = useState(null);

    const fetchLine = async () => {
        const response = await getLineById(ticket.route_id);
        setLine(response);
    };

    useEffect(() => {
        fetchLine();
        const tmpDate=ticket.departure_date_time.split("T")[0].split("-");
        setDate(tmpDate[2]+"."+tmpDate[1]+"."+tmpDate[0]);
    }, []);

    if (!line) {
        return <div>Loading...</div>
    }

    console.log(line);

    return (
        <div key={ticket.id} className="ticket-card">
            <h3>{line[0].stations[0].station.city_name} - {line[0].stations[line[0].stations.length-1].station.city_name}</h3>
            <p>
                <strong>Datum:</strong> {date}
            </p>
            <p>
                <strong>Cijena:</strong> {ticket.price}
            </p>
        </div>
    );
};