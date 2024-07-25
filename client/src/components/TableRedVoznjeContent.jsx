import "../styles/tableredvoznjecontent.css";
import Linija from "./Linija";
import MapWrapper from "./MapWrapper";

const TableRedVoznjeContent = ({ departure, isEdit }) => {
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
                        handleEditClick={() => {}}
                        handleDeleteClick={() => {}}
                    />
                    <MapWrapper stations={departure.stations} />
                </div>
            </div>
        </li>
    );
};

export default TableRedVoznjeContent;
