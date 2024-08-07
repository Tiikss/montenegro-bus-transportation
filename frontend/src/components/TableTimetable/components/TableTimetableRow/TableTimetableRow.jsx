import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import { TicketReservation } from "../../../TicketReservation/TicketReservation";

export const TableTimetableRow = ({
    departure,
    isEdit,
    handleDeleteClick,
    isAdmin,
    handleResponse,
    routeId,
}) => {
    const handleClick = (e) => {
        const content =
            e.target.parentElement.parentElement.nextElementSibling
                .nextElementSibling.nextElementSibling;
        console.log(content);
        if (content.style.maxHeight) {
            content.style.padding = "0 24px";
            content.style.maxHeight = null;
            content.style.marginBottom = "0";
            content.style.border = "none";
        } else {
            content.style.border = "1px solid #e0e0e0";
            content.style.marginBottom = "25px";
            content.style.padding = "40px 24px";
            content.style.maxHeight =
                content.childNodes[0].offsetHeight + 40 + "px";
        }
    };

    const handleTicketClick = () => {
        const orderModal = document.getElementById("ticket-reservation-modal");
        const overlay = document.getElementById("overlay");
        orderModal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        document.body.style.overflow = "hidden";
    };

    const calculateRouteDuration = (departure, arrival) => {
        let departureDate, arrivalDate;
        if (Number(departure.split(":")[0]) > Number(arrival.split(":")[0])) {
            departureDate = new Date(
                2024,
                1,
                2,
                Number(departure.split(":")[0]),
                Number(departure.split(":")[1])
            );
            arrivalDate = new Date(
                2024,
                1,
                3,
                Number(arrival.split(":")[0]),
                Number(arrival.split(":")[1])
            );
        } else {
            departureDate = new Date(
                2024,
                1,
                2,
                Number(departure.split(":")[0]),
                Number(departure.split(":")[1])
            );
            arrivalDate = new Date(
                2024,
                1,
                2,
                Number(arrival.split(":")[0]),
                Number(arrival.split(":")[1])
            );
        }
        const departureTime = departureDate.getTime();
        const arrivalTime = arrivalDate.getTime();
        const diff = arrivalTime - departureTime;
        const hours = Math.floor(diff / 1000 / 60 / 60);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        return `${hours}h ${minutes}m`;
    };

    return (
        <>
            <li className="red-voznje-table-row red-voznje-row-hover">
                {isEdit && (
                    <div className="col col-0">
                        {departure.stations[0].station.address}
                    </div>
                )}
                <div className="col col-1">
                    {
                        departure.stations[departure.stations.length - 1]
                            .station.address
                    }
                </div>
                <div className="col col-2">{0}</div>
                <div className="col col-3">
                    {departure.stations[0].departure_time}
                </div>
                <div className="col col-4">
                    {calculateRouteDuration(
                        departure.stations[0].departure_time,
                        departure.stations[departure.stations.length - 1]
                            .arrival_time
                    )}
                </div>
                <div className="col col-5">
                    {
                        departure.stations[departure.stations.length - 1]
                            .arrival_time
                    }
                </div>
                {!isEdit && (
                    <div className="col col-6">{departure.company_name}</div>
                )}
                <div className="col col-7">
                    {departure.stations[departure.stations.length - 1].price +
                        "€"}
                </div>
                <div className="col col-8">
                    <input
                        type="checkbox"
                        className="plus-minus"
                        onClick={(e) => handleClick(e)}
                    />
                </div>
                {isEdit ? (
                    <div className="col col-9">
                        {!isAdmin ? (
                            <>
                                <Link to={`/dodaj-liniju/${routeId}`}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.1}
                                        stroke="currentColor"
                                        className="admin-icon"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                        />
                                    </svg>
                                </Link>
                                <Link onClick={handleDeleteClick}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.1}
                                        stroke="currentColor"
                                        className="admin-icon"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                    </svg>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    onClick={(e) =>
                                        handleResponse({
                                            response: "accept",
                                            id: routeId,
                                        })
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.1}
                                        stroke="currentColor"
                                        className="admin-icon"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m4.5 12.75 6 6 9-13.5"
                                        />
                                    </svg>
                                </Link>
                                <Link
                                    onClick={(e) =>
                                        handleResponse({
                                            response: "decline",
                                            id: routeId,
                                        })
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.1}
                                        stroke="currentColor"
                                        className="admin-icon"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    </svg>
                                </Link>
                            </>
                        )}
                    </div>
                ) : (
                    <div className="col col-9">
                        <FontAwesomeIcon
                            icon={faTicket}
                            className="red-voznje-icons"
                            onClick={handleTicketClick}
                        />
                    </div>
                )}
            </li>
            <TicketReservation />
        </>
    );
};
