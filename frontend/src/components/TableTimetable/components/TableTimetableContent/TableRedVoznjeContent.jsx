import "./tableredvoznjecontent.css";
import { Linija } from "../../../Line/Linija";
import { MapWrapper } from "../../../MapWrapper/MapWrapper";

export const TableRedVoznjeContent = ({ departure, isEdit, isAdmin }) => {
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
                    <Linija
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
