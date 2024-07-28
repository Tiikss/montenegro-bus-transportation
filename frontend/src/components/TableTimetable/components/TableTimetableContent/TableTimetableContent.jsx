import "./table-timetable-content.css";
import { Line } from "../../../Line/Line";
import { MapWrapper } from "../../../MapWrapper/MapWrapper";

export const TableTimetableContent = ({ departure, isEdit, isAdmin }) => {
    return (
        <li className="col-content">
            <div className="col table-row-description">
                <h3>Broj autobusa: {departure.busID}</h3>
                <h4>
                    {departure.stations[0].station.address}-
                    {
                        departure.stations[departure.stations.length - 1]
                            .station.address
                    }
                    <br></br>
                    <br></br>
                    {departure.stations[0].departure_time}-
                    {
                        departure.stations[departure.stations.length - 1]
                            .arrival_time
                    }
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
