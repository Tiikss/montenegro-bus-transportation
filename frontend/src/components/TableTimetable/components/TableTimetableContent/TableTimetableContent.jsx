import "./table-timetable-content.css";
import { Line } from "../../../Line/Line";
import { MapWrapper } from "../../../MapWrapper/MapWrapper";

export const TableTimetableContent = ({ departure, isEdit, isAdmin }) => {
    return (
        <li className="col-content">
            <div className="col table-row-description">
                <h3>Broj autobusa: {departure.busID}</h3>
                <h4>
                    {departure.startingPoint}-{departure.destination}
                    <br></br>
                    <br></br>
                    {departure.departureTime}-{departure.arrivalTime}
                </h4>
                <div className="table-line-container">
                    <Line
                        stations={departure.stations}
                        isEdit={isEdit}
                        isAdmin={isAdmin}
                        handleEditClick={() => {}}
                        handleDeleteClick={() => {}}
                    />
                    <MapWrapper stations={departure.stations} />
                </div>
            </div>
        </li>
    );
};
